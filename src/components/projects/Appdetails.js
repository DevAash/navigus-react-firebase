import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
const Appdetails = (props) => {
    const {project,auth,profile} = props;
    console.log(project)
    if(!auth.uid) return <Redirect to='/signin'></Redirect>

    if(project) {
        return(
        <div className="container section project-details">
             <div className="card z-depth-0">
             <div className="card-content">
        <span className="card-title"><b>Name: </b> {project.name}</span>
        <p><b>Phone Number: </b>: {project.phone}</p>
        <p><b>Summary: </b></p><p>{project.content}</p>
            </div> 
            <div className="card-action gret lighten-4 grey-text">
                <div>{project.createdAt.toDate().toDateString()}</div>
            
            </div>
            </div>
        </div>
        )
    }
    else{

    }
    return (
      <div className="container center">
          <p>Loading Appoiment</p>
      </div>  
    )
}

const mapStateToProps =(state,ownProps) =>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return{
        project:project,
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Appdetails);