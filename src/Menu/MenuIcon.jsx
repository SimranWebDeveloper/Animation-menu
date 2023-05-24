import React from 'react'


const MenuIcon = ({isOpen,setIsOpen}) => {
  return (
    <>
      <h5 onClick={()=>setIsOpen(!isOpen)}><i className="bi bi-list"></i></h5>
    </>
  )
}

export default MenuIcon
