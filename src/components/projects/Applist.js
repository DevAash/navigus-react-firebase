import React from 'react'
import AppSummary from './AppSummary'
import App from '../../App'
import {Link} from 'react-router-dom'
const Applist=({projects}) =>{
    return(
        <div className="project-list selection">
           {projects && projects.map(project =>{
               return(
                   <Link to={ '/app/'+project.id }  key={project.id}>
                   <AppSummary project={project}></AppSummary>
                   </Link>
               )
           })}
        </div>

        

        
        
    )
}
export default Applist;