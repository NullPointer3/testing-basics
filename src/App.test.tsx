import React from "react";
import App from "./App";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const setUp = () => {
  render(<App />);
  const headerElement = screen.getByRole('columnheader', { name: /items/i });
  const buttonElement = screen.getByRole('button', { name: /Add item/i });
  const inputElement = screen.getByRole('textbox');
  const disabledButtonElement = screen.getByRole('button', {name: /add item/i});
  return { headerElement, buttonElement, inputElement, disabledButtonElement };
}

describe('App', () => {

  it('should have the `th` "Items"', () => {
    const { headerElement } = setUp();
    expect(headerElement).toBeInTheDocument();
  })

  it('should have a `button` element', () => {
    const { buttonElement } = setUp();
    expect(buttonElement).toBeInTheDocument();
  })

  it('should have an `input` element', () => {
    const { inputElement } = setUp();
    expect(inputElement).toBeInTheDocument();
  })

  it('renders a disabled `button` with text "Add item"', () => {
    const { disabledButtonElement } = setUp();
    expect(disabledButtonElement).toBeDisabled();
  })

  it('the input should innitially be empty', () => {
    const { inputElement } = setUp();
    expect(inputElement).toHaveValue('');
  })

  it('allows user to text in the input and submit', () => {
    const { inputElement, buttonElement } = setUp();
    // Simulate typing into the input
    fireEvent.change(inputElement, { target: { value: 'Test Input' } });
    expect(inputElement).toHaveValue('Test Input');
    expect(buttonElement).not.toBeDisabled();

     // Simulate button click
    fireEvent.click(buttonElement);

    // Assert submitted value is displayed
    const submittedElement = screen.getByText('Test Input');
    expect(submittedElement).toBeInTheDocument();
  })
})