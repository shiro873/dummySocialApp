import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Post from '../src/containers/Post'; // Assuming the file is named Post.js

// Mock services and redux dependencies
jest.mock('../src/redux/reducers/postReducer', () => ({
  addPost: jest.fn()
}));

jest.mock('../src/services/navigation-service', () => ({
  navigate: jest.fn()
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

describe('Post Component', () => {
  it('handles posting when button is pressed', () => {
    const { getByLabelText, getByText } = render(<Post />);
    
    const postInput = getByLabelText('Post');
    const postButton = getByText('Post');

    // Mock user input
    fireEvent.changeText(postInput, 'Test post content');

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

    // Trigger post button press
    fireEvent.press(postButton);

    // Assertions
    expect(require('../redux/reducers/postReducer').addPost).toHaveBeenCalledWith({
      post: 'Test post content',
      username: 'test',
      date: expect.any(Date)
    });
    expect(require('../services/navigation-service').navigate).toHaveBeenCalledWith('Home');
  });
});
