import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddName from './AddName';

describe('AddName', () => {
  test('renders the component', () => {
    const mockAddName = jest.fn();
    render(<AddName name="" addName={mockAddName} />);
    const inputElement = screen.getByLabelText('Add Name:');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls addName with the correct argument when the form is submitted', () => {
    const name = 'Bruce Wayne';
    const mockAddName = jest.fn();
    render(<AddName name="" addName={mockAddName} />);
    const inputElement = screen.getByLabelText('Add Name:');
    fireEvent.change(inputElement, { target: { value: name } });
    const addButtonElement = screen.getByText('Add');
    fireEvent.click(addButtonElement);
    expect(mockAddName).toHaveBeenCalledWith(name);
  });

  test('clears the input element after the form is submitted', () => {
    const name = 'Dick Grayson';
    const mockAddName = jest.fn();
    render(<AddName name="" addName={mockAddName} />);
    const inputElement = screen.getByLabelText('Add Name:');
    fireEvent.change(inputElement, { target: { value: name } });
    const addButtonElement = screen.getByText('Add');
    fireEvent.click(addButtonElement);
    expect(inputElement).toHaveValue('');
  });
});
