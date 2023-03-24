import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


const AddName = ({ names, name, addName }) => {

  const [currentName, setName] = useState('');

  const handlerNameChange = (event) => {
    setName(event.target.value);
  };

  const handlerAddName = (event) => {
    event.preventDefault();
    addName(currentName);
    setName('');
  };

  return (
    <form onSubmit={handlerAddName}>
      <label>Add Name:
        <input type="text" id="name" value={currentName} onChange={handlerNameChange} />
      </label>

      <button type="submit" >Add</button>
    </form>
  );
}

AddName.propTypes = {
  name: PropTypes.string.isRequired,
  addName: PropTypes.func.isRequired,
};

export default AddName;
