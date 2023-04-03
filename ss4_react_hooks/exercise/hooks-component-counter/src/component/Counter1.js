import React, { useState } from 'react'

export default function Counter1() {
    const [counterOne, setCounterOne] = useState(1)

   const handleIncreaseOne = () =>{
    setCounterOne(counterOne + 1)
   }  
   const handleIncreaseTwo = () =>{
    setCounterOne(counterOne + 2)
   }  
  return (
    <div>
         <h1>{counterOne}</h1>   
         <div>
         <button onClick={handleIncreaseOne}>Add 1</button>
         </div>
         <div>
         <button onClick={handleIncreaseTwo}>Add 2</button>
         </div>

    </div>
  )
}
