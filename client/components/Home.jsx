import React, { Component } from 'react';
import PartDataService from "../services/part.service.js";
import { Link } from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props);
        this.retrieveGroups = this.retrieveGroups.bind(this);
        // this.onChangeName = this.onChangeName.bind(this);
        // this.addParticipant = this.addParticipant.bind(this);
        // this.newParticipant = this.newParticipant.bind(this);
        // this.selectParticipant = this.selectParticipant.bind(this);
    
        this.state = {
            groups: [],
            newGroup: '',
            fetchedGroups: false,
            submitted: false
        }
      }

    componentDidMount(){
        this.retrieveGroups();
    }
    
    retrieveGroups(){
        PartDataService.getUserClasses('1')
        .then(response =>{
            this.setState({
                groups: response.data
            });
        })
        .catch(e => {
            console.log(e);
        })
    }
  

    render(){
        const { groups } = this.state;
        
        if(!groups.length) return (
            <div>
                <h2>No groups found</h2>
            </div>
        )

        const groupList = groups.map((group, i) => {
              return(
                <Link key={group.id} className='classLink' groupID={group.id} to='participants'>{group.name}</Link>
              );        
        });

        return(
            <div id = 'groupsContainer'>
                <h1 className='title'>Your Groups:</h1>
                <div id='group-list'>
                  {groupList}
                </div>
            </div>
        )
    }
}

export default Home;