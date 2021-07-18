import React from "react";
import {Modal} from 'react-bootstrap';
import { connect } from "react-redux";
import { deleteContactAction } from "../actions/contactActions";
import EditContact from "./EditContact";

class ContactItem extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
            show : false
        };
    }

    handleDelete = () => {
        this.props.deleteContact(this.props.contact.id); 
    }

    closeModal = () =>{
        this.setState(
           {show : false}
        )
    }
    showModal = () =>{
        this.setState(
            {show : true}
        )
    }
    render(){
        return(
            <div className = "row contactitems" style = {{marginLeft : 20}}>
         
            <h4>
                <i class="fa fa-user-o" aria-hidden="true"> {" "+ this.props.contact.contactname}</i> 
            </h4>
            
            <h4>
                <i class="fa fa-phone" aria-hidden="true"> {" "+ this.props.contact.phonenumber}</i>
            </h4>
               
            <h4>
                <i class="fa fa-map-marker" aria-hidden="true">{" " + this.props.contact.location}</i>
            </h4>
                
            <h4>
                <i class="fa fa-pencil editdelete" aria-hidden="true" onClick = {this.showModal} > </i>
                <i class="fa fa-minus-circle editdelete" aria-hidden="true" onClick = {this.handleDelete}></i>
            </h4>

            <div>
            
            </div>

            
                <Modal show={this.state.show} onHide={this.closeModal}>
                  <Modal.Header closeButton>
                      <Modal.Title>Edit Contact </Modal.Title>
                  </Modal.Header>

                  <Modal.Body >
                    <EditContact
                    contact = {this.props.contact}
                    updateContact = {this.props.updateContact} 
                    closeModal = {this.closeModal}/>
                  </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteContact : deleteContactAction
}

export default connect(null, mapDispatchToProps)(ContactItem);