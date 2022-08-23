import React from 'react';
import Card from './Context'
import { UserContext } from './Context'

function Withdraw(){

  const ctx = React.useContext(UserContext);
  const [show, setShow]           = React.useState(true);
  const [status, setStatus]       = React.useState('');
  const [balance, setBalance]     = React.useState('');
  const [myBalance, setMybalance] = React.useState(ctx.users[0].balance);



  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function insufficient(balance, myBalance){
    if (balance > myBalance){
      setStatus("Error: you ain't that rich lmao");
      return false;
    }
    return true;
  }

  function balanceWithdraw(){
    if (!validate(balance,       'balance'))     return;
    if (!insufficient(balance, myBalance))       return;

    setMybalance(myBalance - balance);
    console.log("Remaining Balance: $" + (myBalance - balance));
    ctx.users[0].balance = (myBalance - parseInt(balance));
    setShow(false);
    return myBalance;
  }

  function clearForm(){
    setBalance('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      status={status}
      body={show ? (
        <>
        <label text="Users"> Please select a user:   -</label>
          <select name="Users" id="Username">
            <option value="user1">{ctx.users[0].name}</option>
          </select><br/><br/>
        Balance: ${myBalance}<br/>
        <input type="number" className="form-control" id="balance"
        placeholder="Enter amount to withdraw" value={balance} onChange={e => setBalance(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={balanceWithdraw}> Withdraw</button>
        </>
      ):(
        <>
        <h5>Success! Remaining balance: ${myBalance}</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw more money</button>
        </>
      )}
    />
  )
};

export default Withdraw;