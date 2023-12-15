// PatientFormField.tsx
import React, { ReactNode } from 'react';
import { Col, Form, FloatingLabel } from 'react-bootstrap';

interface PatientFormFieldProps {
  controlId: string;
  label: string;
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid: boolean;
  feedbackMessage: string;
  isRadio?: boolean; // Added isRadio prop
  children?: ReactNode;
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
  isRadio = false,
  children,
}) => (
  <Col>
    <FloatingLabel controlId={controlId} label={label} className="mb-3">
      {isRadio ? (
        <div>
          {children}
          <Form.Control.Feedback type="invalid">{feedbackMessage}</Form.Control.Feedback>
        </div>
      ) : (
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          isInvalid={isInvalid}
        />
      )}
    </FloatingLabel>
  </Col>
);

export default PatientFormField;
