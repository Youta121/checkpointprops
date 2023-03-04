import React from 'react';

const fullName = (props) => {
    
    console.log(props);
    
    const myStyle={
        textAlign:"center",
        color:"rgb(9, 30, 90)",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }
    return (
        <div> 
    <h1 style ={myStyle} >  {props.firstName} {props.lastName}</h1>
        </div>
    );
};

export default fullName;