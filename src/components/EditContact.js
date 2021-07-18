import React from 'react';
import { connect } from 'react-redux';
import { editContactAction } from '../actions/contactActions';


class EditContact extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            contactname : this.props.contact.contactname,
            phonenumber : this.props.contact.phonenumber,
            location : this.props.contact.location
        };
    }
    
    handleOnChange = (event) => {
        this.setState(
           { [event.target.name] : event.target.value} 
        )
    }
 
    handleSubmit = () => {
        let contact = {...this.state, id: this.props.contact.id}
        this.props.editContact(this.props.contact.id, contact);
        this.props.closeModal();
    }

    render(){
        return (
            <div>
                <form>
                    <label>Name</label> <br></br>
                    <input type = "text" name = "contactname" value = {this.state.contactname} onChange = {this.handleOnChange}></input> <br></br>

                    <label>Phone Number</label> <br></br>
                    <input type = "number" name = "phonenumber" value = {this.state.phonenumber} onChange = {this.handleOnChange}></input> <br></br>

                    <label>Location</label> <br></br>
                    <input type = "text" name = "location" value = {this.state.location} onChange = {this.handleOnChange}></input> <br></br>

                    <br></br>
                
                    <button type="button" onClick = {this.handleSubmit}>Update</button>

                </form>
            </div>
        )
    }
  

}

const mapDispatchToProps = {
    editContact : editContactAction
}

export default connect(null, mapDispatchToProps)(EditContact);