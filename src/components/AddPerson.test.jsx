import React from 'react'; // import React library for JSX usage
import { render, screen, fireEvent } from '@testing-library/react'; // import render, screen, and fireEvent from the testing library
import '@testing-library/jest-dom'; // import jest-dom library for additional matchers
import AddPerson from './AddPerson'; // import the AddPerson component being tested

describe('AddPerson', () => { // describe the test suite for AddPerson component
  test('should render form inputs and submit button', () => { // define the first test case
    const addPerson = jest.fn(); // create a mock function for addPerson prop
    render(<AddPerson addPerson={addPerson} />); // render the AddPerson component with the mock addPerson prop
    expect(screen.getByLabelText('Name:')).toBeInTheDocument(); // assert that the "Name" input label is present in the document
    expect(screen.getByLabelText('Age:')).toBeInTheDocument(); // assert that the "Age" input label is present in the document
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument(); // assert that the "Submit" button is present in the document
  });

  test('should call addPerson function with name and age on form submit', async () => { // define the second test case
    const addPerson = jest.fn(); // create a mock function for addPerson prop
    render(<AddPerson addPerson={addPerson} />); // render the AddPerson component with the mock addPerson prop

    const nameInput = screen.getByLabelText('Name:'); // get the "Name" input field
    const ageInput = screen.getByLabelText('Age:'); // get the "Age" input field
    const submitButton = screen.getByRole('button', { name: /submit/i }); // get the "Submit" button

    const nameValue = 'John'; // set a test name value
    const ageValue = 25; // set a test age value

    fireEvent.change(nameInput, { target: { value: nameValue } }); // simulate user input for the name field
    fireEvent.change(ageInput, { target: { value: ageValue } }); // simulate user input for the age field
    fireEvent.click(submitButton); // simulate a form submit event by clicking the "Submit" button

    expect(addPerson).toHaveBeenCalledWith({ name: nameValue, age: ageValue }); // assert that the addPerson mock function was called with the correct arguments
    expect(nameInput).toHaveValue(''); // assert that the name field was reset
    expect(ageInput).toHaveValue(null); // assert that the age field was reset
  });
});
