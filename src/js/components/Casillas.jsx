
import React from "react";


const Casillas = (props) => {
  return (
    <>
    <div className="ccard d-inline-flex flex-row m-3 bg-dark text-light text-letterC "> 
      <div className="card  p-3 bg-secondary text-light m-3 font-weight-bold" >{props.watchIcon}</div>
      <div className="card  p-3 bg-secondary text-light  m-3">{props.Six}</div>
      <div className="card  p-3 bg-secondary text-light  m-3">{props.Five}</div>
       <div className="card  p-3 bg-secondary text-light m-3">{props.Four}</div>
       <div className="card  p-3 bg-secondary text-light m-3">{props.Three}</div>
       <div className="card p-3 bg-secondary text-light m-3">{props.Two}</div> 
        <div className="card p-3 bg-secondary text-light m-3">{props.One}</div> 
            </div>
        </>
    );
};
export default Casillas;

 