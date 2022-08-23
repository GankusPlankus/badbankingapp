import React from 'react';
import { UserContext } from './Context'
import './index.css';

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
      <div className="container">
          <h1>All Data</h1><br/>
          <h5>User Database</h5><br/>
          <table className="table table-striped">
              <tbody>
                  <tr className="table-primary">
                          <td className="col-3">Name</td>
                          <td className="col-3">Password</td>
                          <td className="col-3">Email</td>
                          <td className="col-3">Balance</td>
                  </tr>
                  {ctx.users.map((user) => (
                      <tr className="table-secondary" key={user.email}>
                          <td className="col-3">{user.name}</td>
                          <td className="col-3">{user.password}</td>
                          <td className="col-3">{user.email}</td>
                          <td className="col-3">{user.balance}</td>
                      </tr>
                  )
                  )}
              </tbody>
          </table>
      </div>
      
  );
};

export default AllData;