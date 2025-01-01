import React from "react";
import App from "./App";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

let headerElement: HTMLElement, buttonElement: HTMLElement, inputElement: HTMLElement, disabledButtonElement: HTMLElement

const setUp = () => {
  render(<App />);
  headerElement = screen.getByRole('columnheader', { name: /items/i });
  buttonElement = screen.getByRole('button', { name: /Add item/i });
  inputElement = screen.getByRole('textbox');
  disabledButtonElement = screen.getByRole('button', {name: /add item/i});
}

describe('App',()=> {
  beforeEach(() => {
    setUp();
  })
  it('should have the `th` "Items"', () => {
    expect(headerElement).toBeInTheDocument();
  })

  it('Should have a `button` element', () => {
    expect(buttonElement).toBeInTheDocument();
  })

  it('Should have an `input` element', () => {
    expect(inputElement).toBeInTheDocument();
  })

  it('`button` should be disabled', () => {
    expect(disabledButtonElement).toBeDisabled()
  })
  
  describe('The user populates the `input`', () => {

    it("The `input` should initially be empty", () => {
      expect(inputElement).toHaveValue('');
    })

    it('should enable the button after user input', () => {
      fireEvent.change(inputElement, { target: { value: 'New Item' } });
      expect(disabledButtonElement).not.toBeDisabled();
    });
  })

})