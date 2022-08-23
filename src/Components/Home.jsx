import React from 'react'
import Card from './Context'
import { UserContext } from './Context'


function Home(){
  const ctx = React.useContext(UserContext);  
  return (
      <Card
        bgcolor="primary"
        txtcolor="white"
        header="BadBank Inc."
        title="Privacy? That's for chumps."
        text="You can use this bank, but don't expect your information to be protected."
        body={(<img src="bank.png" className="img-fluid"
        alt="Responsive image"/>)}
      />
  );  
};

export default Home
