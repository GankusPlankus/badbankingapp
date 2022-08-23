import React from "react"
import { HashRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import NavBar from './Navbar'
import Home from './Home'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import Login from './Login'
import AllData from './Alldata'
import CreateAccount from './Createaccount'
import { UserContext } from './Context'
import './index.css';


const Route = ReactRouterDOM.Route;
const HashRouter = ReactRouterDOM.HashRouter;

function Spa() {
  const ctx = React.useContext(UserContext);
  return (

    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{
        name:'Christian',
        email:'chrisn@mit.edu',
        password:'topsecret',
        balance:999}]}}>              
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/alldata/" component={AllData} />
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);

export {UserContext};
export default Spa;