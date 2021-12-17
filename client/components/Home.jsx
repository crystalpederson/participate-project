import React, { Component } from 'react';
import PartDataService from "../services/part.service.js";
import { Link } from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props);
        this.retrieveGroups = this.retrieveGroups.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.addGroup = this.addGroup.bind(this);
        this.newGroup = this.newGroup.bind(this);
        // this.selectParticipant = this.selectParticipant.bind(this);
    
        this.state = {
            groups: [],
            newGroupName: '',
            fetchedGroups: false,
            submitted: false
        }
      }

    componentDidMount(){
        this.retrieveGroups();
    }

    onChangeName(e){
        this.setState({
          newGroupName: e.target.value
        });
    }

    addGroup(){
        var data = {
            name: this.state.newGroupName
        }
        
        if(this.state.newGroupName !== ''){
            PartDataService.addGroup('1', data)
            .then(response => {
                this.setState({
                submitted: true
            });
            this.retrieveGroups();
            this.newGroup();
          })
          .catch(e => {
              console.log(e);
          })
        }
    }

    newGroup(){
        this.setState({
            newGroupName: '',
            submitted: false
        });
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
                <Link key={group.id} className='classLink' to={`/participants/${group.id}`}>{group.name}</Link>
                // <Link key={group.id} className='classLink' to={`/participants`}>{group.name}</Link>
              );        
        });

        return(
            <div id = 'groupsContainer'>
                <h1 className='title'>Your Groups:</h1>
                <div id='group-list'>
                  {groupList}
                </div>
                <div className='form-group'>
                    <input type='text' placeholder='Name' className='inputForm' value={this.state.newGroup} onChange={this.onChangeName} name='title'></input>
                    <button id='addGroupButton' onClick={this.addGroup}>Add New Group</button> 
                </div>
            </div>
        )
    }
}

export default Home;