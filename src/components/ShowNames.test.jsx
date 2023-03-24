import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShowNames from './ShowNames';

// Test suite for the ShowNames component
describe('ShowNames', () => {

  // An array of test names
  const testPeople = [
    { name: 'Batman' },
    { name: 'Superman' },
    { name: 'Wonder Woman' },
  ];

  // Test case to check if ShowNames renders a list of names
  it('renders a list of names', () => {

    // Render the ShowNames component with the test names
    const { getAllByRole } = render(<ShowNames people={testPeople} />);

    // Get all the list items in the rendered component
    const listItems = getAllByRole('listitem');

    // Check that the number of list items matches the number of test names
    expect(listItems.length).toBe(testPeople.length);

    // Check that each list item contains the correct name
    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(testPeople[index].name);
    });
  });

  // Test case to check if ShowNames renders an empty list when no names are provided
  it('renders an empty list when no names are provided', () => {

    // Render the ShowNames component with an empty array of names
    const { queryByRole } = render(<ShowNames people={[]} />);

    // Check that there is no list element in the rendered component
    expect(queryByRole('list')).toBeNull();
  });
});
