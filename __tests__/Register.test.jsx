import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Register from '../src/components/Register'; // Assuming the file is named Register.js

// Mock services and redux dependencies
jest.mock('../src/services/firebase-service', () => ({
  createUserWithEmailAndPassword: jest.fn()
}));

jest.mock('../src/services/navigation-service', () => ({
  navigate: jest.fn()
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

describe('Register Component', () => {
  it('handles registration when registration button is pressed', () => {
    const { getByLabelText, getByText } = render(<Register />);
    
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const reEnterPasswordInput = getByLabelText('Re Enter Password');
    const registerButton = getByText('Register');

    // Mock user input
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'Password123!');
    fireEvent.changeText(reEnterPasswordInput, 'Password123!');

    // Trigger register button press
    fireEvent.press(registerButton);

    // Assertions
    expect(require('../services/firebase-service').createUserWithEmailAndPassword).toHaveBeenCalledWith('test@example.com', 'Password123!');
    expect(require('../services/navigation-service').navigate).toHaveBeenCalledWith('Login');
  });
});
