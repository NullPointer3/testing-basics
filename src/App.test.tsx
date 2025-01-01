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

describe('App',()=> {
  it('should have the `th` "Items"', () => {
    const { headerElement } = setUp();
    expect(headerElement).toBeInTheDocument();
  })

  it('Should have a `button` element', () => {
    const { buttonElement } = setUp();
    expect(buttonElement).toBeInTheDocument();
  })

  it('Should have an `input` element', () => {
    const { inputElement } = setUp();
    expect(inputElement).toBeInTheDocument();
  })
})