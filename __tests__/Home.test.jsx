// Import necessary dependencies for testing
import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../src/containers/Home'; // Assuming the file is named Home.js

// Mock useSelector to provide a default state for testing
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}));

describe('Home Component', () => {
  beforeEach(() => {
    // Mock useSelector response for testing purposes
    useSelector.mockImplementation(callback =>
      callback({
        post: {
          posts: [
            {
              user: 'Test User 1',
              post: 'Test Post 1',
              date: new Date('2023-12-18T12:00:00Z')
            },
            {
              user: 'Test User 2',
              post: 'Test Post 2',
              date: new Date('2023-12-19T12:00:00Z')
            }
          ]
        }
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('renders posts correctly', () => {
    const { getAllByText, getByTestId } = render(<Home />);
    
    // Check if the Home component is rendered
    const homeComponent = getByTestId('home-component');
    expect(homeComponent).toBeTruthy();

    // Check if posts are rendered with expected content
    const postUserElements = getAllByText(/Test User/i); 
    const postTextElements = getAllByText(/Test Post/i); 
    const postDateElements = getAllByText(/2023/i);

    expect(postUserElements.length).toBe(4); 
    expect(postTextElements.length).toBe(2); 
    expect(postDateElements.length).toBe(2); 
  });
});
