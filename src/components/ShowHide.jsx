import React, { useState } from 'react'

function ShowHide() {
  const [show, setShow] = useState(true)

  const HandleClick = (event) => {
    setShow(!show);
  }


  return (
    <div>
      <button onClick={HandleClick}>{show ? "hide" : "show"} text</button>
      {show && <h3>hideMe!!</h3>}
    </div>
  )
}

export default ShowHide
  
