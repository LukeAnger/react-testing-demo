import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AverageAge = ({ people }) => {
  const [averageAge, setAverageAge] = useState(0);

  const getAverageAge = () => {
    if (people.length === 0) return ;
    const ages = people.map((person) => person.age);
    const sum = ages.reduce((a, b) => a + b, 0);
    const average = sum / ages.length;
    setAverageAge(average.toFixed(2));
  };

  useEffect(() => {
    getAverageAge();
  }, [people]);


  return (
    <div style={{width: '10vw'}}>
      <h3>Average Age</h3>
      <p style={{marginTop: '1rem', fontSize: '1.2rem'}}>{averageAge}</p>
    </div>
  );
}

AverageAge.propTypes = {
  people: PropTypes.array.isRequired,
};

export default AverageAge;

