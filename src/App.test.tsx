import React from "react";
import App from "./App";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const setUp = () => {
  render(<App />);
  const headerElement = screen.getByRole('columnheader', { name: /items/i });
  const buttonELement = screen.getByText('Add item');
  const inputElement = screen.getByRole('textbox');
  const disabledButtonElement = screen.getByRole('button', {name: /add item/i});
  return { headerElement, buttonELement, inputElement, disabledButtonElement };
}

describe('App', () => {

  it('should have the `th` "Items"', () => {
    const { headerElement } = setUp();
    expect(headerElement).toBeInTheDocument();
  })

  it('should have a `button` element', () => {
    const { buttonELement } = setUp();
    expect(buttonELement).toBeInTheDocument();
  })

  it('should have an `input` element', () => {
    const { inputElement } = setUp();
    expect(inputElement).toBeInTheDocument();
  })

  it('renders a disabled `button` with text "Add item"', () => {
    const { disabledButtonElement } = setUp();
    expect(disabledButtonElement).toBeDisabled();
  })
})