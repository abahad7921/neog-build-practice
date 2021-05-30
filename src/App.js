import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState("");
  const [amount,setAmount] = useState(0);
  const [bill,setBill] = useState(0);
  const [out,setOut] = useState("");
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

  function onChangeHandler2(){
    var val2 = event.target.value;

    if(val2 != ""){
      setBill(val2);
    }
  }

  function showIfTrue() {
    if (show != "") return <input onChange={onChangeHandler2}></input>;
  }

  function calculateOutput(){
    if(bill != 0 && amount != 0)
    {
      //console.log("they are not equal to 0");

      var diff = amount - bill;
      //console.log("the diff is: "+ diff);
      var notes = [2000, 500,100,20, 10, 5, 1 ];
      
      var countNotes = 0,noteCounter;

        // count notes using Greedy approach
        for (var i = 0; i < 7; i++) {
        if (diff >= notes[i]) {
        noteCounter =  Math.floor(  diff / notes[i] );
        
        countNotes = countNotes + noteCounter;
        diff = diff - noteCounter * notes[i];
          }
        }


       
        console.log(countNotes);
        setOut(countNotes);

    }
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

      {
        calculateOutput()
      }

      

      <p>THe output is {out}</p>
    </div>
  );
}
