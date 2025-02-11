import React from 'react';
import { useState } from 'react';
import { operators } from '../../../data.js';
import OperatorButton from './OperatorButton.js';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorValue, setOperators] = useState(operators);
  console.log("Operator Value", {operatorValue})
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorValue.map((item, index) => (
        <OperatorButton char={item.char} key={index} />
      ))}
    </div>
  );
};
export default Operators;
