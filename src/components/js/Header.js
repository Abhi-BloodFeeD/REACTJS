import React from 'react';
import {useState,useEffect} from 'react';
import './Header.css';

function Header() {
  

  const [score,setScore]=useState(0);

  function setTheScore(e) {
    if(e===0)
     return setScore(0);
    if(e===1 && score>=0)
      return setScore(score+1);
    if(e===-1 && score>0)
      return setScore(score-1);
  }
  

  return (
    
    <div className="header">
      <h1>MADE BY ABHINAV</h1>    
      <h1 className="score" >{score}</h1>
      <button className="button soft" onClick={()=>setTheScore(1)} name="Increase">INCREASE</button>
      <button className="button gentle" onClick={()=>setTheScore(-1)} name="Decrease">DECREASE</button>
      <button className="button warning" onClick={()=>setTheScore(0)} name="reset">RESET</button>
    </div>
  )
}

export default Header
