// AddPatientForm.tsx
import React, { useState } from 'react';
import { Container, Row, Button, Alert } from 'react-bootstrap';
import PatientFormField from './PatientFormField';

const AddPatientForm = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [showError, setShowError] = useState(false);

  const handleAddPatient = () => {
    if (!firstName || !lastName || !email || !phone || !dob || !address) {
      setShowError(true);
      return;
    }
    window.alert(firstName
    );
  };

  return (
    <Container>
      <Row>
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
          controlId="email"
          label="Email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={showError && !email}
          feedbackMessage="Please enter a valid email."
        />
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
          controlId="dob"
          label="Date of Birth"
          type="date"
          placeholder="Enter date of birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          isInvalid={showError && !dob}
          feedbackMessage="Please enter your date of birth."
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
      {showError && (
        <Alert variant="danger" className="mt-3">
          Please fill in all required fields.
        </Alert>
      )}
      <Button variant="primary" type="button" className="mt-4" onClick={handleAddPatient}>
        Add Patient
      </Button>
    </Container>
  );
};

export default AddPatientForm;
