import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AverageAge from '../components/AverageAge.jsx';

describe('AverageAge', () => {

  test('should render the average age', () => {

    const people = [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
      { name: 'Jack', age: 35 },
    ];

    const { getByText } = render(<AverageAge people={people} />);

    const sum = people.reduce((acc, person) => acc + person.age, 0);
    const expectedAverage = sum / people.length;

    const averageAge = getByText(expectedAverage.toFixed(2));

    expect(averageAge).toBeInTheDocument();
  });
});
