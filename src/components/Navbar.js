import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

import netflix from "../images/R-removebg-preview.png"
import {IoSearchOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import {IoPeopleOutline } from "react-icons/io5";
const Navbar = ({onInputChange}) => {
  const handleChange=(e)=>{
    onInputChange(e.target.value)
  }
  const[show,setShow]=useState(false)
  const[change,setChange]=useState("")
  const open=()=>{
    
    setShow(()=>!show)
    if(show===false){
      setChange("open")
    }else if(show===true){
      setChange("find")
    }
  }
  return <header>
    <nav>
    <img className='netflix-logo' src={netflix} alt="" />
      <NavLink to="/" className={ ({isActive}) =>
        isActive ? "activeLink link" : "nonactiveLink link"
      } >Home</NavLink>
     
      <NavLink to="TvShows" className={({ isActive }) =>
        isActive ? "activeLink link" : "nonactiveLink link"
      }>Tv Shows</NavLink>
     

<NavLink to="newPopular" className={({ isActive }) =>
        isActive ? "activeLink link" : "nonactiveLink link"
      } >New & Popular</NavLink>

<NavLink to="MyList" className={({ isActive }) =>
        isActive ? "activeLink link" : "nonactiveLink link"
      } >My List</NavLink>

<NavLink to="Browse" className={({ isActive }) =>
        isActive ? "activeLink link" : "nonactiveLink link"
      } >Browse by Languages</NavLink>

<NavLink to="Movies" className={({ isActive }) =>
        isActive ? "activeLink link" : "nonactiveLink link"
      } >Movies</NavLink>
    </nav>
    <form className='inp' >
      <input onChange={handleChange} type="text" placeholder='Find' className={change} />
      <IoSearchOutline onClick={open} className='search'/>
      <BsBell className='bell'/>
      <IoPeopleOutline className='acc'/>
    </form>
  </header>
}




export default Navbar