import React from "react"

function Footer ({handlePrev,handleNext}) {
return (
    <div className='button-wrapper'>
          <button onClick={handlePrev} name="provius" className='button'>Provius</button>
          <button onClick={handleNext} name="next" className='button'>Next</button>
        </div>
)
   
}

export default Footer;