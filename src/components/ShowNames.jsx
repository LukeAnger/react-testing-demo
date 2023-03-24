import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ShowNames = ({ people }) => {
  if (people.length === 0) return null;
  console.log('SHOW people: ', people)
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3>Names</h3>
      <ul>
        {people.map((name, i) => (
          <li key={i}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
}

ShowNames.propTypes = {
  people: PropTypes.array.isRequired,
};

export default ShowNames;