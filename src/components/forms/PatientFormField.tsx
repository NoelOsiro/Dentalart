// PatientFormField.tsx
import React from 'react';
import { Col, FloatingLabel, Form } from 'react-bootstrap';

interface PatientFormFieldProps {
  controlId: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid: boolean;
  feedbackMessage: string;
}

const PatientFormField: React.FC<PatientFormFieldProps> = ({
  controlId,
  label,
  type,
  placeholder,
  value,
  onChange,
  isInvalid,
  feedbackMessage,
}) => (
  <Col>
    <FloatingLabel
        controlId={controlId}
        label={label}
        className="mb-3"
      >
        <Form.Control type={type} placeholder={placeholder} value={value}
        onChange={onChange}
        isInvalid={isInvalid} />
        <Form.Control.Feedback type="invalid">{feedbackMessage}</Form.Control.Feedback>
      </FloatingLabel>
  </Col>
);

export default PatientFormField;
