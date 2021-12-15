import React, { Component } from 'react';
// import DeleteParts from './DeleteParts.jsx';

const Participant =(props) => {
  const {name, status, counter} = props.info;
  return(
    <div className='participant'>
        {/* <DeleteParts name={name}></DeleteParts> */}
        <h4 id='partName'>{name}</h4>
    </div>
  );

};

export default Participant;