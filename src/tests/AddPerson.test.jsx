// import React library for JSX usage
import React from 'react';
// import render, screen, and fireEvent from the testing library
import { render, screen, fireEvent } from '@testing-library/react';
// import jest-dom library for additional matchers
import '@testing-library/jest-dom';
// import the AddPerson component being tested
import AddPerson from '../components/AddPerson.jsx';

// describe the test suite for AddPerson component
describe('AddPerson', () => {


  test('should render form inputs and submit button', () => {

    // create a mock function for addPerson prop
    const addPerson = jest.fn();

    // render the AddPerson component with the mock addPerson prop
    render(<AddPerson addPerson={addPerson} />);

    // assert that the "Name" input label is present in the document
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();

    // assert that the "Age" input label is present in the document
    expect(screen.getByLabelText('Age:')).toBeInTheDocument();

    // assert that the "Submit" button is present in the document
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });


  test('should call addPerson function with name and age on form submit', async () => {

    // create a mock function for addPerson prop
    const addPerson = jest.fn();

    // render the AddPerson component with the mock addPerson prop
    render(<AddPerson addPerson={addPerson} />);

    // get the "Name" input, "Age" input, and "Submit" button from the document
    const nameInput = screen.getByLabelText('Name:');
    const ageInput = screen.getByLabelText('Age:');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // define values for the name and age fields
    const nameValue = 'John';
    const ageValue = 25;

    // simulate user input and form submission
    fireEvent.change(nameInput, { target: { value: nameValue } });
    fireEvent.change(ageInput, { target: { value: ageValue } });
    fireEvent.click(submitButton);

    // assert that the addPerson mock function was called with the correct arguments
    expect(addPerson).toHaveBeenCalledWith({ name: nameValue, age: ageValue });

    // assert that the name field was reset
    expect(nameInput).toHaveValue('');

    // assert that the age field was reset
    expect(ageInput).toHaveValue('');
  });
});
