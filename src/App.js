import React from 'react';
import { BrowserRouter  , Switch , Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

class App extends React.Component{
 
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route exact path = '/signup' component = {SignUp}/>
            <Route exact path = '/login' component = {LogIn}/>
          </Switch>
        </BrowserRouter>
      </div>
    );

}
}
export default App;
