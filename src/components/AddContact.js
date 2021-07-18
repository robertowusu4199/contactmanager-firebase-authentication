import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addContactAction } from '../actions/contactActions';



class AddContact extends Component {
    constructor(props){
        super(props)

        this.state = {
            contactname : "",
            phonenumber : "",
            location : ""
        };
    }
    handleOnChange = (event) =>{
        this.setState(
            { [event.target.name] : event.target.value} 
        )
    }

    handleSubmit = () => {
        let contactId = 10000 + Math.random() * 10000000;
        let contact = { ...this.state, id: contactId };
        this.props.addNewContact(contact);
        this.setState({
            contactname : "",
            phonenumber : "",
            location : ""
        })//this clears whatever was typed initially into the form;basically resetting the form
        
    }

    
    render() {
        return (
            <div>
                <form>
                    <h4>Add New Contact</h4>
                    <label>Name</label> <br></br>
                    <input type = "text" name = "contactname" value = {this.state.contactname} onChange = {this.handleOnChange}></input> <br></br>
                    <br></br>

                    <label>Phone Number</label> <br></br>
                    <input type = "text" name = "phonenumber" value = {this.state.phonenumber} onChange = {this.handleOnChange} ></input> <br></br>
                    <br></br>
                    
                    <label>Location</label> <br></br>
                    <input type = "text" name = "location" value = {this.state.location} onChange = {this.handleOnChange}></input> <br></br>

                    <br></br>

                    <button type="button" onClick = {this.handleSubmit} >Add </button>
                   
            
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addNewContact : addContactAction
}

export default connect(null, mapDispatchToProps)(AddContact);
