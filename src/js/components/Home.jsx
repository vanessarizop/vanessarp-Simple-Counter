import React from "react";
import Casillas from "./Casillas";

//include images into your bundle


const Home = (props) => {
  return (
    <div className="container-fluid justify-content-center text-center mt-3 " >
      <Casillas watchIcon={props.watch} One={props.digitOne} Two={props.digitTwo} Three={props.digitThree} Four={props.digitFour} Five={props.digitFive} Six={props.digitSix}
      />
    </div>
  );
};

export default Home;