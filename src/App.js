import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState("");
  // const [showAfter,setShowAfter] = useState("");

  function onChangeHandler() {
    var val = event.target.value;
    //console.log(val);

    if (val === "") {
      setShow("");
    } else {
      setShow("now enter the bill amount: ");
      //setShowAfter("now enter the bill amount");
    }
  }

  function showIfTrue() {
    if (show != "") return <input></input>;
  }

  return (
    <div className="App">
      <h1>Manage Cash Program</h1>
      <h2>Enter amount to see the magic</h2>

      <p>Enter The Total Amount given: </p>
      <input onChange={onChangeHandler}></input>
      <p>{show}</p>

      {
        showIfTrue() //this will show the next bill input if the total amount is given
      }
    </div>
  );
}
