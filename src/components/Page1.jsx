import React from 'react'

const Page1 = () => {
    const Heart=()=>{
        window.location.href="/love";
    }
  return (
    <div>
        <h1>Oii Chella kutty</h1>
        <h3>click to Accept My Love</h3>
        <button onClick={Heart}>P . J</button>
    </div>
  )
}

export default Page1