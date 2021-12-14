import React, { Component, useState } from 'react';
//import Participant from './Participant.jsx'

class ParticipantsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            fetchedParticipants: false,
            participants: [],
        };
    }

    componentDidMount(){
        fetch('/api/1/participants')
        .then(res => res.json())
        .then((participants) =>{
            if(!Array.isArray(participants)) participants = [];
            console.log(participants)
            return this.setState({
                participants,
                fetchedParticipants: true
            })
        })
        .catch(err => console.log('ParticipantsContainer.componentDidMount: get participants: ERROR: ', err));
    }

    render(){
        if(!this.state.fetchedParticipants) return (
            <div>
                <h1>Loading data, please wait...</h1>
            </div>
        );

        const { participants} = this.state;

        if(!participants) return null;

        if(!participants.length) return (
            <div>No participants found</div>
        )

        const participated = participants.map((indiv, i) => {
                return(
                    <h1>{indiv.name}</h1>
                );               
        });

        return(
            <div id = 'participantsContainer'>
                <h1 className='title'>Period 1</h1>
                {participated}
            </div>
        )
    }
};

export default ParticipantsContainer;