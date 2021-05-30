import React, { useState } from "react";

const CalculateOutput = (props) => {
  // const [showhere, setShowHere] = useState("");
  var amount = props.amt;
  var bill = props.bill;
  if (amount !== 0 && bill !== 0) {
    var diff = amount - bill;

    var notes = [2000, 500, 100, 20, 10, 5, 1];

    var countNotes = 0,
      noteCounter;

    // count notes using Greedy approach
    for (var i = 0; i < 7; i++) {
      if (diff >= notes[i]) {
        noteCounter = Math.floor(diff / notes[i]);

        countNotes = countNotes + noteCounter;
        diff = diff - noteCounter * notes[i];
      }
    }

    console.log(countNotes);
    //setShowHere(countNotes);
  }

  return <div>{props.show !== "" ? <p>{countNotes}</p> : ""}</div>;
};

export default CalculateOutput;
