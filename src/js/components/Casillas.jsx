
import React from "react";


const Casillas = (props) => {
  return (
    <>
    <div className="card d-inline-flex flex-row m-3 bg-dark text-letterC "> 
      
         <div className="card  bg-secondary text-light m-3 py-5 ">{props.watchIcon}</div>
      <div className="card   bg-secondary text-light  m-3 p-3">{props.Six}</div>
      <div className="card  bg-secondary text-light  m-3 p-3">{props.Five}</div>
       <div className="card  bg-secondary text-light m-3 p-3">{props.Four}</div>
       <div className="card   bg-secondary text-light m-3 p-3">{props.Three}</div>
       <div className="card bg-secondary text-light m-3 p-3">{props.Two}</div> 
        <div className="card  bg-secondary text-light m-3 p-3">{props.One}</div> 
            </div>
        </>
    );
};
export default Casillas;

 