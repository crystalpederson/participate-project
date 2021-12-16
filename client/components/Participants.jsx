import React, { Component } from 'react';
import axios from 'axios';

const Participant =(props) => {
  const {name, status, counter} = props.info;
  const update = props.retrieveParticipants;
  const clear = props.clear;

  const deletePart = (deleted) => {
    axios.delete('/api/participants/1', { data: { name: deleted } })
    update();
  }

  const updateStatus = (partName, partStatus) => {
    axios.put('/api/participants/1', { name: partName, status: partStatus })
    clear();
    update();
  }

  return(
    <div className='participant'>
      <button id='deleteButton' onClick={()=>{{deletePart(name)}}}>x</button>
      <h4 id='partName'>{name}</h4>
      <button className='updateButton' onClick={()=>{updateStatus(name, status)}}></button>
    </div>
  );

};

export default Participant;