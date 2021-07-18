import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUpAction } from '../actions/authActions'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            email : '',
            password : ''
        }
    }

    handleOnChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleOnSubmit = () =>{
        this.props.signUpAction(this.state.email, this.state.password)
        this.setState({
            username : '',
            email : '',
            password : ''
        })
    }
    render() {
        if(this.props.auth.isLoaded === false){
            return <h2>Loading...</h2>
        }
        
        if(this.props.auth.isEmpty === false){
            return <Redirect to = '/dashboard' />
        }

        return (
            <div className = 'container'>
                <div className = 'row'>
                    <form>
                        <h4>Sign Up</h4>
                        <label>Username</label><br></br>
                        <input type = 'text' name = 'username' value = {this.state.username} onChange = {this.handleOnChange} /> <br></br>

                        <label>Email</label><br></br>
                        <input type = 'text' name = 'email' value = {this.state.email} onChange = {this.handleOnChange} /><br></br>

                        <label>Password</label><br></br>
                        <input type = 'password' name = 'password' value = {this.state.password} onChange = {this.handleOnChange} /><br></br><br></br>

                        <button type = 'button' onClick = {this.handleOnSubmit}>Sign Up</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
    auth : state.firebaseState.auth
    }
}

const mapDispatchToProps = {
    signUpAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)










//take signed in users to the dashboard when they are logged in
            //firebase has auth properties on a signed in user  
            //if(this.props.auth.isLoaded === false){
                //return <h2>Loading...</h2>
            //}