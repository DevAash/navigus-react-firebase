import React, { Component,useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectAction'
import {Redirect} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

class CreateApp extends Component {
    state={
        name:'',
        content:'',
        phone:'',
    }
    handleChange =(e) =>{
        this.setState({
          [e.target.id]: e.target.value  
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state);
        this.props.history.push('/');

    }
    selectDate=()=>{
        const[date,setDate] = useState(null)
    }

    render() {
        const {auth,users} = this.props;
        console.log(auth)
        
        return (
            <div>
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Book an Appointment</h5>

                <div className="input-field">
                <label htmlFor="title">Name</label>
                <input type="text" onChange={this.handleChange} id="name"></input>
                </div> 

                <div className="input-field">
                <label htmlFor="phone">Phone number</label>
                <input type="text" onChange={this.handleChange} id="phone"></input>
                </div>
{/*                 
                <div className="input-field">
                <label htmlFor="phone">Date</label>
               <DatePicker selected={} onChange={this.handleChange}></DatePicker>
                </div> */}

                <div className="input-field">
                <label htmlFor="summary">Appointment Summary</label>
               <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>

                <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
            </form>
            </div>        
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth:state.firebase.auth,
        users:state.firestore.data
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        createProject:(project)=>dispatch(createProject(project))
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
firestoreConnect([
    {collection: 'users'}
]))(CreateApp);
