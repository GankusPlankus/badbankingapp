import React, { Fragment } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './Components/Context';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Withdraw from './Components/Withdraw';
import Deposit from './Components/Deposit';
import CreateAccount from './Components/Createaccount';
import AllData from './Components/Alldata';
import './App.css';


function Spa() {

  return (
      <HashRouter>
          <UserContext.Provider value={{  users:[{name: 'Christian', email: 'cr@mit.edu', password: 'secret', balance: 999}],
                                          account:[{name: '', email: '', balance: 0}],
                                          transactions:[],
                                        }} >
            <NavBar />
            <Routes>
             <Fragment>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/login/" element={<Login />} />
                  <Route path="/withdraw" element={<Withdraw />} />
                  <Route path="/deposit" element={<Deposit />} />
                  <Route path="/createaccount" element={<CreateAccount />} />
                  <Route path="/alldata" element={<AllData />} />
              </Fragment>
            </Routes>
          </UserContext.Provider>
      </HashRouter>
  );
}

export default Spa;