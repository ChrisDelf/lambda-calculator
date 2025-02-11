import React from 'react';
import { useState } from 'react';
import { numbers } from '../../../data.js';
import NumberButton from './NumberButton.js';

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberValue, setNumbers] = useState(numbers);
  console.log(numberValue);







    return (
      <div>
   {/*    {numberValue.map( (item, index) => */}
   {/* <button key = {index}>{item}</button>)} */}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberValue.map((number, index) => (<NumberButton number = {number} key={index} />))}


    </div>
  );

};

export default Numbers;
