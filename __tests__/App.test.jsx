import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders the AppNavigator component', () => {
    const { getByText } = render(<App />);
    // Assuming AppNavigator renders some identifiable text
    expect(getByText('AppNavigator Text')).toBeTruthy();
  });

  it('wraps the AppNavigator component with a Provider', () => {
    const { getByElementType } = render(<App />);
    expect(getByElementType(Provider)).toBeTruthy();
  });
});
