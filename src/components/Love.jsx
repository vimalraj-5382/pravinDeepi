import React from 'react'

function Love() {
    const call=()=>{
        alert("I Love You Tooo")
    }
  return (
    <div>
        <h1>My Love is Only For You...
                My Dheepika &hearts;
        </h1>
        <button onClick={call}>Love You &hearts;</button>
    </div>
  )
}

export default Love