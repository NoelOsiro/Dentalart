// AddPatientForm.tsx
import React, { useState } from 'react';
import { Container, Row, Button, Alert, Form } from 'react-bootstrap';
import PatientFormField from './PatientFormField';
import { supabase } from '../../utils/supabase';

const AddPatientForm = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState(0); // Changed from dob to age
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState(''); // Added gender field
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAddPatient = async () => {
    try {
      setLoading(true);
      setShowError(false);
      setErrorText('');
      setShowSuccess(false);

      if (!firstName || !lastName || !phone || !age || !address || !gender) {
        setShowError(true);
        setErrorText('Please fill in all required fields.');
        return;
      }

      const { data, error } = await supabase
        .from('patients')
        .insert([
          {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            phone: phone,
            age: age, // Changed from dob to age
            address: address,
            gender: gender,
          },
        ]);

      if (error) {
        setErrorText('Duplicate phone number. Number already exists')
        setShowError(true);
      } else {
        setShowSuccess(true);
        // Optionally, you can reset the form fields here
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setPhone('');
        setAge(0);
        setAddress('');
        setGender('');
        setErrorText('');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row>
      {showError && (
        <Alert variant="danger" className="mt-3" onClose={() => setShowError(false)} dismissible>
          {errorText}
        </Alert>
      )}

      {showSuccess && (
        <Alert variant="success" className="mt-3" onClose={() => setShowSuccess(false)} dismissible>
          Patient added successfully!
        </Alert>
      )}
        <PatientFormField
          controlId="firstName"
          label="First Name"
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          isInvalid={showError && !firstName}
          feedbackMessage="Please enter your first name."
        />
        <PatientFormField
          controlId="middleName"
          label="Middle Name"
          type="text"
          placeholder="Enter middle name"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          isInvalid={showError && !middleName}
          feedbackMessage="Please enter your middle name."
        />
        <PatientFormField
          controlId="lastName"
          label="Last Name"
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          isInvalid={showError && !lastName}
          feedbackMessage="Please enter your last name."
        />
      </Row>

      <Row>
        <PatientFormField
          controlId="phone"
          label="Phone"
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          isInvalid={showError && !phone}
          feedbackMessage="Please enter a valid phone number."
        />
        <PatientFormField
          controlId="age" // Changed from dob to age
          label="Age"
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          isInvalid={showError && !age}
          feedbackMessage="Please enter your age."
        />
      </Row>

      <Row>
        <PatientFormField
          controlId="address"
          label="Address"
          type="textarea"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          isInvalid={showError && !address}
          feedbackMessage="Please enter your address."
        />
      </Row>

      <Row>
        <PatientFormField
          controlId="gender"
          label=""
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          isRadio={true} // Use the isRadio prop
          isInvalid={showError && !gender}
          feedbackMessage="Please select a gender."
        >
          <div className='d-flex'>
            <Form.Check
              type="radio"
              id="male"
              label="Male"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />
            <Form.Check
              type="radio"
              id="female"
              label="Female"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            />
            <Form.Check
              type="radio"
              id="other"
              label="Other"
              value="other"
              checked={gender === 'other'}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </PatientFormField>
      </Row>
      <Button variant="primary" type="button" className="mt-4" onClick={handleAddPatient} disabled={loading}>
        {loading ? 'Adding Patient...' : 'Add Patient'}
      </Button>
      
    </Container>
  );
};

export default AddPatientForm;
