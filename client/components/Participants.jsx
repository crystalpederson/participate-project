import React, { Component } from 'react';
import axios from 'axios';

import img1 from '../images/cool.png'
import img2 from '../images/furious.png'
import img3 from '../images/kiss.png'
import img4 from '../images/laughing.png'
import img5 from '../images/relax.png'
import img6 from '../images/sick.png'
import img7 from '../images/smile.png'
import img8 from '../images/tongue-out.png'
import img9 from '../images/whistle.png'
import checkmark from '../images/check.svg'

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

  let buttonImage;
  if (status === true){
    buttonImage = checkmark;
  }
  
  let panda = img1;

  if(name[0].toLowerCase() === 'a' || name[0].toLowerCase() === 'j'|| name[0].toLowerCase() === 's'){
    panda = img2;
  }
  if(name[0].toLowerCase() === 'b'|| name[0].toLowerCase() === 'k'|| name[0].toLowerCase() === 't'){
    panda = img3;
  }
  if(name[0].toLowerCase() === 'c'|| name[0].toLowerCase() === 'l'|| name[0].toLowerCase() === 'u'){
    panda = img4;
  }
  if(name[0].toLowerCase() === 'd'|| name[0].toLowerCase() === 'm'|| name[0].toLowerCase() === 'v'){
    panda = img5;
  }
  if(name[0].toLowerCase() === 'e'|| name[0].toLowerCase() === 'n'|| name[0].toLowerCase() === 'w'){
    panda = img6;
  }
  if(name[0].toLowerCase() === 'f'|| name[0].toLowerCase() === 'o'|| name[0].toLowerCase() === 'x'){
    panda = img7;
  }
  if(name[0].toLowerCase() === 'g'|| name[0].toLowerCase() === 'p'|| name[0].toLowerCase() === 'y'){
    panda = img8;
  }
  if(name[0].toLowerCase() === 'h'|| name[0].toLowerCase() === 'q'|| name[0].toLowerCase() === 'z'){
    panda = img9;
  }

  return(
    <div className='participant'>
      <button id='deleteButton' onClick={()=>{{deletePart(name)}}}>x</button>
      <img className='emoji' src={panda}></img>
      <h4 id='partName'>{name}</h4>
      <button className='updateButton' onClick={()=>{updateStatus(name, status)}}><img id='buttonImage' src={buttonImage}></img></button>
    </div>
  );

};

export default Participant;