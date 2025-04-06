// MyComponent.js
import React from 'react';

const MyComponent = () => (
  <div>
    <h1 data-testid="heading">Welcome to Jest Testing</h1>
    <button data-testid="button">Click Me</button>
  </div>
);

export default MyComponent;


//Testing

// MyComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import MyComponent from './MyComponent';

test('renders the heading and button', () => {
  // Render the component
  render(<MyComponent />);

  // Select the heading element using getByTestId
  const headingElement = screen.getByTestId('heading');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent('Welcome to Jest Testing');

  // Select the button element using getByTestId
  const buttonElement = screen.getByTestId('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('Click Me');
});
