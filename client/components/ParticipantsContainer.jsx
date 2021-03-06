
import React, { Component } from "react";
import PartDataService from "../services/part.service.js";
import { Link, useLocation } from 'react-router-dom';

import Participant from "./Participants.jsx";



export default class ParticipantsContainer extends Component {
  constructor(props){
    super(props);
    this.retrieveParticipants = this.retrieveParticipants.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.newParticipant = this.newParticipant.bind(this);
    this.selectParticipant = this.selectParticipant.bind(this);
    this.retrieveGroupName = this.retrieveGroupName.bind(this);

    this.state = {
        participants: [],
        newPart: '',
        currentPart: '',
        currentGroup: '',
        fetchedParticipants: false,
        submitted: false
    }
  }
  

  
  componentDidMount(){
      this.retrieveParticipants();
      this.retrieveGroupName();
  }

  onChangeName(e){
      this.setState({
        newPart: e.target.value
      });
  }

  selectParticipant(){
    const i = Math.floor(Math.random() * this.state.participants.length);

    if(this.state.participants[i].status === false){
        const selected = this.state.participants[i];
        this.setState({
            currentPart: selected,
        })
    }
    else{
        this.selectParticipant();
    }
  }

  addParticipant(){
    const pathname= window.location.pathname.split('/');
    const path_id = pathname[2];  

    var data = {
        name: this.state.newPart
    }
    
    if(this.state.newPart !== ''){
          PartDataService.addPart(path_id, data)
      .then(response => {
          this.setState({
            submitted: true
          });
          this.retrieveParticipants();
          this.newParticipant();
      })
      .catch(e => {
          console.log(e);
      })
    }
  }

  newParticipant(){
      this.setState({
          newPart: '',
          currentPart: '',
          submitted: false
      });
  }

  retrieveParticipants(){
    const pathname= window.location.pathname.split('/');
    const path_id = pathname[2]; 

      PartDataService.getGroup(path_id)
      .then(response =>{
          this.setState({
              participants: response.data
          });
      })
      .catch(e => {
          console.log(e);
      })
  }

  retrieveGroupName(){
    const pathname= window.location.pathname.split('/');
    const path_id = pathname[2]; 

      PartDataService.getGroupName(path_id)
      .then(response =>{
          this.setState({
              currentGroup: response.data[0].name
          });
      })
      .catch(e => {
          console.log(e);
      })
  }

  render(){
    const { participants } = this.state;
    
    if(!participants.length) return (
      <div className='noListData'>
          <h2>No participants found</h2>
          <div className='form-group'>
              <input type='text' placeholder='Enter name' className='inputForm' id='partInputForm' value={this.state.newPart} onChange={this.onChangeName} name='title'></input>
              <button className='partButtons' id='addPartButton' onClick={this.addParticipant}>Add Participant</button> 
          </div>

      </div>
      
    )
    
    const participated = participants.map((indiv, i) => {
      if(indiv.status === true){
        return(
          <Participant className='parts' key={i} info={indiv} clear={this.newParticipant} retrieveParticipants={this.retrieveParticipants}></Participant>
        );        
      }
    });

    const notParticipated = participants.map((indiv, i) => {
        if(indiv.status === false){
          return(
            <Participant className='parts' key={i} info={indiv} clear={this.newParticipant} retrieveParticipants={this.retrieveParticipants}></Participant>
          );        
        }
    });

    const current = () =>{
        if(this.state.currentPart){
            return(
                <div id='selectedCont'>
                  <Participant className='parts' key='current' info={this.state.currentPart} clear={this.newParticipant} retrieveParticipants={this.retrieveParticipants}></Participant>      
                </div>
            )
        }
    }

    return(
      <div id='participantsContainer'>
        <h1 className='title'>{this.state.currentGroup}</h1>
        <div id='selector'>
          <button className='partButtons' id='randomButton' onClick={()=>setTimeout(this.selectParticipant,300)}>Select a Random Participant!</button>
          <div id='selectorContent'>
              {current()}
          </div>
        </div>
        <div id='mainList'>

            <div className='listContainer' id='notParted'>
                <h2>Has Not Participated</h2>
                <div className='partList'>
                    {notParticipated}
                </div>

            </div>     

            <div className='listContainer' id='parted'>
                <h2>Participated</h2>
                    <div className='partList'>
                        {participated}  
                    </div>           
                </div>
            </div>

                <div className='form-group'>
                    <input type='text' placeholder='Enter name' className='inputForm' id='partInputForm' value={this.state.newPart} onChange={this.onChangeName} name='title'></input>
                    <button className='partButtons' id='addPartButton' onClick={this.addParticipant}>Add Participant</button> 
                </div>
      </div>
    )
  }
}
