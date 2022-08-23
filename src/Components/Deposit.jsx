import React from 'react';
import { UserContext } from './Context'
import Card from './Context'

function Deposit(){
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

  function balanceDeposit(){
    if (!validate(balance,       'balance'))     return;

    setMybalance(myBalance + parseInt(balance));
    console.log("Remaining Balance: $" + (myBalance + parseInt(balance)));
    ctx.users[0].balance  = (myBalance + parseInt(balance));
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
      header="Deposit"
      status={status}
      body={show ? (
        <>
        Balance: ${myBalance}<br/>
        <input type="number" className="form-control" id="balance"
        placeholder="Enter amount to Deposit" value={balance} onChange={e => setBalance(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={balanceDeposit}> Deposit</button>
        </>
      ):(
        <>
        <h5>Success! Remaining balance: ${myBalance}</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit more money</button>
        </>
      )}
    />
  )
};

export default Deposit;