import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Profile from '../src/containers/Profile'; // Assuming the file is named Profile.js

// Mock services and redux dependencies
jest.mock('../src/services/firebase-service', () => ({
  signOut: jest.fn()
}));

jest.mock('../src/services/navigation-service', () => ({
  navigate: jest.fn()
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

describe('Profile Component', () => {
  it('handles logout when logout button is pressed', () => {
    const { getByText } = render(<Profile />);
    
    const logoutButton = getByText('Logout');

    // Mock useSelector response for testing purposes
    require('react-redux').useSelector.mockImplementation(callback =>
      callback({
        profile: {
          profile: {
            email: 'test@example.com'
          }
        }
      })
    );

    // Trigger logout button press
    fireEvent.press(logoutButton);

    // Assertions
    expect(require('../services/firebase-service').signOut).toHaveBeenCalled();
    expect(require('../services/navigation-service').navigate).toHaveBeenCalledWith('Login');
    
  });
});
