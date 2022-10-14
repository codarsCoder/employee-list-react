import React from "react"

function Header ({index}) {
  
    return (
        <div  className="header">
        <h2>Employee List</h2>
        <div className="pageCounter"><p> Pages: {index *5 } to {index*5 + 5}</p></div>
        </div>
        
    )
}

export default Header;