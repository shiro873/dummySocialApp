import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../src/containers/Login'; 

// Mock services and redux dependencies
jest.mock('../src/services/firebase-services', () => ({
  signInWithEmailAndPassword: jest.fn(() => ({ success: true }))
}));

jest.mock('../src/services/navigation-service', () => ({
  navigate: jest.fn()
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

describe('Login Component', () => {
  it('handles login button press and dispatches action on successful login', () => {
    const { getByLabelText, getByText } = render(<Login />);
    
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    // Mock user input
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    // Mock signInWithEmailAndPassword function to return success
    require('../services/firebase-service').signInWithEmailAndPassword.mockReturnValue({ success: true });

    // Trigger login button press
    fireEvent.press(loginButton);

    // Assertions
    expect(require('../services/firebase-service').signInWithEmailAndPassword).toHaveBeenCalledWith('test@example.com', 'password123');
    expect(require('../services/navigation-service').navigate).toHaveBeenCalledWith('HomeStack');
  });

});
