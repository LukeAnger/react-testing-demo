import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShowNames from '../components/ShowNames.jsx';

// Test suite for the ShowNames component
describe('ShowNames', () => {

  // An array of test names
  const testPeople = [
    { name: 'Batman' },
    { name: 'Superman' },
    { name: 'Wonder Woman' },
  ];

  // Test case to check if ShowNames displays the correct list of names when names are provided
  it('displays a list of names when names are provided', () => {

    // Render the ShowNames component with the test names
    const { getByText, getAllByRole } = render(<ShowNames people={testPeople} />);

    // Check that the component displays the correct heading for the list of names
    expect(getByText('Names')).toBeInTheDocument();


    // Get all the list items in the rendered component
    const listItems = getAllByRole('listitem');

    // Check that the number of list items matches the number of test names
    expect(listItems.length).toBe(testPeople.length);

    // Check that each list item contains the correct name
    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(testPeople[index].name);
    });
  });

  // Test case to check if ShowNames displays the correct message when no names are provided
  it('displays a message when no names are provided', () => {

    // Render the ShowNames component with an empty array of names
    const { getByText } = render(<ShowNames people={[]} />);

    // Check that the component displays the correct message when no names are provided
    expect(getByText('No names to display')).toBeInTheDocument();
  });

});
