import React from 'react'
import {Link} from 'react-router-dom'
import SignedinLinks from './SignedinLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

const Navbar=(props) =>
{
    const {auth,profile} = props;
    // console.log(auth)
    const links = auth.uid ? <SignedinLinks profile={profile}></SignedinLinks> : <SignedOutLinks></SignedOutLinks>;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <Link to='/'>Navigus</Link>
            {links}
            </div>
        </nav>
    )
}
const mapStateToProps = (state)=>{
    console.log(state)
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)