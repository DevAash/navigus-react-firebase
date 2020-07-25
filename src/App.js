import React from 'react';
import  { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import Appdetails from './components/projects/Appdetails'
import Signin from './components/auth/Signin';
import SignUp from './components/auth/SignUp'
import CreateApp from './components/projects/CreateApp';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route path='/App/:id' component={Appdetails}></Route>
        <Route path='/signin' component={Signin}></Route>
        <Route path='/create' component={CreateApp}></Route>
        <Route path='/signup' component={SignUp}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
