
import React, { Component } from "react";
import PartDataService from "../services/part.service.js";
import { Link } from 'react-router-dom';

import Participant from "./Participants.jsx";

export default class ParticipantsContainer extends Component {
  constructor(props){
    super(props);
    this.retrieveParticipants = this.retrieveParticipants.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.newParticipant = this.newParticipant.bind(this);

    this.state = {
        participants: [],
        newPart: '',
        fetchedParticipants: false,
        submitted: false
    }
  }
  
  componentDidMount(){
      this.retrieveParticipants();
  }

  onChangeName(e){
      this.setState({
        newPart: e.target.value
      });
  }

  addParticipant(){
    var data = {
        name: this.state.newPart
    }

    PartDataService.addPart('1', data)
      .then(response => {
          this.setState({
            submitted: true
          });
          console.log(response.data)
          this.retrieveParticipants();
          this.newParticipant();
      })
      .catch(e => {
          console.log(e);
      })
  }

  newParticipant(){
      this.setState({
          newPart: '',
          submitted: false
      });
  }

  retrieveParticipants(){
      PartDataService.getGroup('1')
      .then(response =>{
          this.setState({
              participants: response.data
          });
          console.log(response.data);
      })
      .catch(e => {
          console.log(e);
      })
  }

  refreshList(){
      this.retrieveParticipants();
  }

  render(){
    const { participants } = this.state;
    
    if(!participants.length) return (
      <div>No participants found</div>
    )
    
    const participated = participants.map((indiv, i) => {
      if(indiv.status === true){
        return(
          <Participant className='parts' key={i} info={indiv}></Participant>
        );        
      }
    });

    const notParticipated = participants.map((indiv, i) => {
        if(indiv.status === false){
          return(
            <Participant className='parts' key={i} info={indiv}></Participant>
          );        
        }
    });


    return(
      <div id='participantsContainer'>
        <h1>Period 1</h1>
        <div id='mainList'>

            <div id='notParted'>
                <h2>Has Not Participated</h2>
                <div className='partList'>
                    {notParticipated}
                </div>
                <div className='form-group'>
                    <input type='text' id='partInputForm' value={this.state.newPart} onChange={this.onChangeName} name='title'></input>
                    <button id='addPartButton' onClick={this.addParticipant}>Add Participant</button> 
                </div>

            </div>     

            <div id='parted'>
                <h2>Participated</h2>
                    <div className='partList'>
                        {participated}  
                    </div>           
                </div>
            </div>
      </div>
    )
  }
}
