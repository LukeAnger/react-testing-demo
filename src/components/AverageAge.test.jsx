import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AverageAge from './AverageAge';

describe('AverageAge', () => {
  test('should calculate and display the average age of people', () => {
    const people = [
      { name: 'John', age: 20 },
      { name: 'Jane', age: 25 },
      { name: 'Bob', age: 30 },
    ];

    render(<AverageAge people={people} />);

    // calculate the average age manually
    const sum = people.reduce((acc, person) => acc + person.age, 0);
    const expectedAverage = (sum / people.length).toFixed(2);

    // check that the component displays the correct average age
    const averageAgeElement = screen.getByText(expectedAverage);
    expect(averageAgeElement).toBeInTheDocument();
  });

  test('should display 0 if there are no people', () => {
    const people = [];
    render(<AverageAge people={people} />);
    const averageAgeElement = screen.getByText('0');
    expect(averageAgeElement).toBeInTheDocument();
  });
});
