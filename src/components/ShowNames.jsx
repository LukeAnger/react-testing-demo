import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ShowNames = ({ names }) => {
  if (names.length === 0) return null;
  return (
    <ul>
      {names.map((name, i) => (
        <li key={i}>{name.name}</li>
      ))}
    </ul>
  );
}

ShowNames.propTypes = {
  names: PropTypes.array.isRequired,
};

export default ShowNames;