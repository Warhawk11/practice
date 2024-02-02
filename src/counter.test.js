import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './counter';

describe('Counter component', () => {
  // Test initial rendering with props
  it('renders with initial count', () => {
    const { getByText } = render(<Counter initialCount={5} />);
    expect(getByText('Count: 5')).toBeInTheDocument();
  });

// Test increment functionality
it('increments count on clicking increment button', () => {
    const { getByText } = render(<Counter initialCount={0} />);
    fireEvent.click(getByText('Increment'));
    expect(getByText('Count: 1')).toBeInTheDocument();
  });

  // Test decrement functionality
  it('decrements count on clicking decrement button', () => {
    const { getByText } = render(<Counter initialCount={3} />);
    fireEvent.click(getByText('Decrement'));
    expect(getByText('Count: 2')).toBeInTheDocument();
  });

  // Test combined increment and decrement
  it('increments and then decrements count', () => {
    const { getByText } = render(<Counter initialCount={10} />);
    fireEvent.click(getByText('Increment'));
    fireEvent.click(getByText('Decrement'));
    expect(getByText('Count: 10')).toBeInTheDocument();
  });
})