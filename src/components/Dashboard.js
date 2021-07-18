import AddContact from './AddContact';
import ContactsLists from './ContactsLists';
import React from 'react';
import { connect } from 'react-redux';
import { logOutAction } from '../actions/authActions';

class Dashboard extends React.Component{
  constructor(props){
    super(props)
  }

  handleLogOut = () =>{
    this.props.logOutAction()
  }
 
  render(){
    return (
      <div>
        <div className = 'row text-right'  style ={{padding : 20}}>
          <button onClick = {this.handleLogOut}>Log Out</button>
        </div>

        <div className="row title">
          <h4>Contact Manager</h4>
        </div>
          
        <div className = "row">
          <div className = "col-md-5 userinput">
            <AddContact/>
          </div>
          
          <div className = "col-md-7 userlist">
            <ContactsLists/>  
          </div>
          
        </div>
      </div>
    );

}
}

const mapDispatchToProps = {
  logOutAction
}
export default connect(null, mapDispatchToProps)(Dashboard);
