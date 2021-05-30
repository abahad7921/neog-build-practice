import "./styles.css";
import React, { useState } from "react";
import calculateOutput from "./CalculateOutput";
export default function App() {
  const [show, setShow] = useState("");
  const [amount, setAmount] = useState(0);
  const [bill, setBill] = useState(0);

  // const [showAfter,setShowAfter] = useState("");

  function onChangeHandler() {
    var val = event.target.value;
    //console.log(val);

    if (val === "") {
      setShow("");
    } else {
      setAmount(val);
      setShow("now enter the bill amount: ");
      //setShowAfter("now enter the bill amount");
    }
  }

  function onChangeHandler2() {
    var val2 = event.target.value;

    if (val2 != "") {
      setBill(val2);
    }
  }

  function showIfTrue() {
    if (show != "") return <input onChange={onChangeHandler2}></input>;
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

      {calculateOutput()}

      <p>THe output is</p>
      <calculateOutput isLoggedIn={isLoggedIn} />
    </div>
  );
}
