// PatientFormField.tsx
import React, { ReactNode } from 'react';
import { Col, FloatingLabel, Form } from 'react-bootstrap';

interface PatientFormFieldProps {
  controlId: string;
  label: string;
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  isInvalid: boolean;
  feedbackMessage: string;
  isSelect?: boolean;
  children?: ReactNode; // Add this line for the children prop
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
  isSelect = false,
  children,
}) => (
  <Col>
    <FloatingLabel controlId={controlId} label={label} className="mb-3">
      {isSelect ? (
        <Form.Select value={value as string} onChange={onChange as any} isInvalid={isInvalid}>
          {children}
        </Form.Select>
      ) : (
        <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange as any} isInvalid={isInvalid} />
      )}
      <Form.Control.Feedback type="invalid">{feedbackMessage}</Form.Control.Feedback>
    </FloatingLabel>
  </Col>
);

export default PatientFormField;
