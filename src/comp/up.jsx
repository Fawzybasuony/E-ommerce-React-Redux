import React from 'react'

export default function ButtomUp() {

    const up = () => { 
        window.scroll({
            left:"0",
            top:"0",
            behavior:"smooth"

        })
     }

  return (
    <div>    
        <button
        onClick={() => { up() }}
        className="btn UP z-3"><i className="fa-solid fa-angle-up"></i></button>
    </div>
  )
}
