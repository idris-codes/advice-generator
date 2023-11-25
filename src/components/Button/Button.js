import React, { useState, useEffect } from 'react';
import './Button.css';


const Button = ({onClick}) => {
    return (
        <div>
          <button onClick={onClick} className='button'>
            <img width="45" height="45" src='../images/icon-dice.svg' alt="" />
          </button>
        </div>
      );
}

export default Button;