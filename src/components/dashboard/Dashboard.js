import React, { Component } from 'react'
import Notifications from './Notification';
import Applist from '../projects/Applist';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Ridirect, Redirect} from 'react-router-dom'
class Dashboard extends Component {
    render() {
        console.log(this.props)
        const {projects,auth,profile} = this.props;
        if(!auth.uid) return <Redirect to='/signin'></Redirect>
        return (
             <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                <h5 class="blue-text text-darken-2">Welcome User: {profile.lastName}</h5>
            {/* <p>id: {profile.id}</p> */}
                <Applist projects={projects}></Applist>
                </div>
                <div className="col s12 m5 offset-m1">
                </div>
                <Notifications></Notifications>  
                </div>
            </div>
    
        )
    }
}


const mapStateToProps = (state) =>{
    console.log(state)
    return{
        projects: state.firestore.ordered.projects,
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard);