// LoginForm.tsx
import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';


interface FormField {
  controlId: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  showError: boolean;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  feedbackMessage: string;
}

interface LoginFormProps {
  formFields: FormField[];
  handleLogin: () => void;
  showError: boolean;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
}


const LoginForm: React.FC<LoginFormProps> = ({ formFields, handleLogin, showError, setShowError }) => (
  <Form>
    {showError && (
      <Alert variant="danger" className="mt-3">
        Please fill in all fields.
      </Alert>
    )}

    {formFields.map((field) => (
      <Form.Group key={field.controlId} controlId={field.controlId} className={field.controlId === 'email' ? 'first' : 'last mb-4'}>
        <Form.Label>{field.label}</Form.Label>
        <Form.Control
          type={field.type}
          placeholder={field.placeholder}
          value={field.value}
          onChange={(e) => {
            field.setValue(e.target.value);
            showError && setShowError(false);
          }}
          isInvalid={showError}
        />
        <Form.Control.Feedback type="invalid">
          {field.feedbackMessage}
        </Form.Control.Feedback>
      </Form.Group>
    ))}

    <Form.Group className="d-flex mb-5 align-items-center">
      <Form.Check type="checkbox" label="Remember me" />
      <span className="ms-auto">
        <a href="/forgot-password" className="forgot-pass">
          Forgot Password
        </a>
      </span>
    </Form.Group>
    <Button variant="primary" type="button" onClick={handleLogin}>
      Log In
    </Button>
  </Form>
);

export default LoginForm;
