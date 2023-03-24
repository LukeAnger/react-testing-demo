import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


const AddPerson = ({ addPerson }) => {

  const [currentName, setName] = useState(''); // controlled input for name field
  const [currentAge, setAge] = useState(''); // controlled input for age field

  // function to handle name input change
  const handlerNameChange = (event) => {
    setName(event.target.value);
  };

  // function to handle age input change
  const handlerAgeChange = (event) => {
    setAge(event.target.value);
  };

  // function to handle form submit
  const handlerAddPerson = (event) => {
    event.preventDefault(); // prevent page refresh
    const obj = {name: currentName, age: Number(currentAge)} // create object to send to server
    addPerson(obj); // call addPerson function from App.jsx
    setName(''); // reset name field
    setAge(''); // reset age field
  };


  return (
    <form onSubmit={handlerAddPerson}>
      <label>Name:
        <input type="text" id="name" value={currentName} onChange={handlerNameChange} />
      </label>
      <label>Age:
        <input type="number" id="age" value={currentAge} onChange={handlerAgeChange} />
      </label>

      <button type="submit" >Submit</button>
    </form>
  );
}

AddPerson.propTypes = {
  addPerson: PropTypes.func.isRequired,
};

export default AddPerson;
