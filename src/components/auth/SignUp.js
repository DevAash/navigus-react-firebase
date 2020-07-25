import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {signUp} from '../../store/actions/authActions'
import TimePicker from 'react-time-picker/dist/TimePicker';
import "react-datepicker/dist/react-datepicker.css";

class SignUp extends Component {
    state={
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        startDate: '',
    }
    handleDateChange = date => {
        this.setState({
          startDate: new Date()
        });
      };
    handleChange =(e) =>{
        this.setState({
          [e.target.id]: e.target.value,
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.signUp(this.state)
        
    }
    render() {
        const {authError,auth} = this.props;
        if(auth.uid) return <Redirect to='/'></Redirect>
        return (
            <div>
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={this.handleChange} id="email"></input>
                </div>

                <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={this.handleChange} id="password"></input>
                </div>

                <div className="input-field">
                <label htmlFor="FirstName">FirstName</label>
                <input type="text" onChange={this.handleChange} id="firstName"></input>
                </div>

                <div className="input-field">
                <label htmlFor="lastName">LastName</label>
                <input type="text" onChange={this.handleChange} id="lastName"></input>
                </div>

                <div>
                <label>time</label>
                <input type="text" id="startdate" className="timepicker"/>
                </div>

            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">SIGN UP</button>
            <div className="red-text center">
                {authError ? <p>{authError}</p>:null}
            </div>
            </div>
            </form>
            </div>        
            </div>
        )
    }
}
const mapStateToProps=(state) =>{
    return{
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}
const mapDispatchToProps= (dispatch) =>
{
    return{
        signUp:(newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
