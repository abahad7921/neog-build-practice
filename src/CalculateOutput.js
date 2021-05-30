import React, { useState } from "react";

const [out, setOut] = useState("");
const CalculateOutput = (props) => {
  if (bill != 0 && amount != 0) {
    //console.log("they are not equal to 0");

    var diff = amount - bill;
    //console.log("the diff is: "+ diff);
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
    setOut(countNotes);
  }
};

export default CalculateOutput;
