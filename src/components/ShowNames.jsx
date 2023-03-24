import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ShowNames = ({ people }) => {

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3>Names</h3>
      {people.length > 0 ?
      <ul>
      {people.map((name, i) => (
        <li key={i}>{name.name}</li>
      ))}
      </ul> :
      <p>No names to display</p>}

    </div>
  );
}

ShowNames.propTypes = {
  people: PropTypes.array.isRequired,
};

export default ShowNames;