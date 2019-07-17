import React from "react";
import { useState } from 'react';
import { numbers } from '../../../data.js';


const NumberButton = ({number}) => {
  return (
    <button className = "numberButton"> {number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button >

  );
};

export default NumberButton;
