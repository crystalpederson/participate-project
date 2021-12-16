import React, { Component } from 'react';
import axios from 'axios';

const Participant =(props) => {
  const {name, status, counter} = props.info;
  const update = props.retrieveParticipants;

  const deletePart = (deleted) => {
    axios.delete('/api/participants/1', { data: { name: deleted } })
  }


  return(
    <div className='participant'>
      <button id='deleteButton' onClick={()=>{{deletePart(name)}}}>x</button>
      {/* <button id='deleteButton' onClick={update}>x</button> */}
      <h4 id='partName'>{name}</h4>
      <input className='check' type='checkbox' ></input>

    </div>
  );

};

export default Participant;