import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LoginPage.css';
import LoginForm from '../components/forms/LoginForm';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const formFields = [
    {
      controlId: 'email',
      label: 'Username',
      type: 'email',
      placeholder: 'Enter your username',
      value: email,
      setValue: setEmail,
      showError,
      setShowError,
      feedbackMessage: 'Please enter a valid email.',
    },
    {
      controlId: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      value: password,
      setValue: setPassword,
      showError,
      setShowError,
      feedbackMessage: 'Please enter a valid password.',
    },
  ];
  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      setShowError(true);
      return;
    }
    console.log(`Logging in with Email: ${email} and Password: ${password}`);
  };

  return (
    <div className="content">
      <Container>
        <Row>
          <Col md={6}>
            <img src="/assets/images/undraw_remotely_2j6y.svg" alt="login" className="img-fluid" />
          </Col>
          <Col md={6} className="contents">
            <Row className="justify-content-center">
              <Col md={8}>
                <div className="mb-4">
                  <h3>Sign In</h3>
                  <p className="mb-4 lead">Login using email and password.</p>
                </div>
                <LoginForm
                  formFields={formFields}
                  showError={showError}
                  setShowError={setShowError}
                  handleLogin={handleLogin}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;