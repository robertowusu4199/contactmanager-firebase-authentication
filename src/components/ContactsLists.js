import React from 'react';
import { connect } from 'react-redux';
import { getAllContactsAction } from '../actions/contactActions';
import ContactItem from './ContactItem';

class ContactsLists extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAllContactsAction()
    } 

    render(){
        return (
            <div>
                <h3 className = "contacts">Contacts</h3>
                {this.props.contactsData.map((contact) => {
                    return <ContactItem  
                    contact = {contact} key={contact.id} 
                    deleteContact = {this.props.deleteContact}
                    updateContact = {this.props.updateContact}/>;
                })}
            
            </div>
        )
    }
    
}
const mapStateToProps = (state) =>{
    return{
    contactsData : state.contactsState.contacts
    }
}

const mapDispatchToProps = {
    getAllContactsAction
}

export default connect(mapStateToProps , mapDispatchToProps)(ContactsLists);