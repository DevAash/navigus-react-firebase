import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'
class Signin extends Component {
    state={
        email:'',
        password:''
    }
    handleChange =(e) =>{
        this.setState({
          [e.target.id]: e.target.value  
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.signIn(this.state)

    }
    render() {
        const {authError,auth} = this.props;
        if(auth.uid) return <Redirect to='/'></Redirect>
        
        return (
            <div>
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Log in</h5>
                <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={this.handleChange} id="email"></input>
                </div>

                <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={this.handleChange} id="password"></input>
                </div>
                <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">LOG IN</button>
            <div className="red-text center">
            { authError ? <p>{authError}</p> : null }
            </div>
            </div>
            </form>
            </div>        
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        authError: state.auth.authError,
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds)=>dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin)
