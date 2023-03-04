import React from "react";
import './App.css'
import fullName from "./Profile/fullName";
import Bio from "./Profile/bio";
import HandleName from "./Profile/handleNAme";

function App() {
    const handleEvent = () => {
      alert(`${this.props.fullName}`);
    };
    return (
      <body style={{margin:"150px 100px",fontSize:"1.2rem"}}>
      <h1>Self-Profile </h1>
      {/*  And invoking the <FullName/> component… */}
        <fullName firstName="dalila" lastName="Chouaya">
        <p>Glad to know you</p>
        </fullName>
        <br/>
        <div style={{border:"black double",  marginTop:"20px",}} id="about">
        <Bio fullName="ben ghorbel eya" Age="25" Gender="Female" Interests="Learning,Farming ,Taking care of animals, Watching TV , Eating and Sleeping"  />
        </div>
        <br/>
        
        <button onClick={handleEvent}>User</button>
      </body>

      
        
  )
}

export default App
