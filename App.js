import React, { useState } from "react"
import "./App.css"

const Apple=()=> {

  let [score , setScore] = useState(0)
  //useState is used for deafult value and setScore is a function


  return (
    <div>
      <h1>Counter WebApp </h1>
      <p>Counting Number:</p> 
      <button className='outputButton'>{score}</button><br />
      <div className="buttondiv"> 
      <button onClick ={()=> {score < 25 ? setScore(score+1) : setScore(25)}} >Increment </button> 
      <button onClick ={function() {score > 0 ? setScore(score-1): setScore(0)}} > Decrement </button>
      <button onClick ={function() {setScore(0)}} >Reset </button>
      </div>
    </div>
  );
}

export default Apple
