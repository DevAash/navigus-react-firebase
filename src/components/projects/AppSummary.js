import React from 'react'
import projectReducer from '../../store/reducers/projectReducer';

const AppSummary = ({project}) =>{
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Appointment taken by {project.name}</p>
            <p className="grey-text">{project.createdAt.toDate().toDateString()}</p>
            </div>
            </div>
    )
}

export default AppSummary;