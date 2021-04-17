import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../context/AuthContex";
import {NewAuthComponent} from "./NewAuthConponent";
import "../styles/button&menu.css"

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)


    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        // <nav className="NewNavBar">
        //
        //     <div className="logo">
        //         <span>TODO</span>
        //     </div>
        //     <ul>
        //         <li><button className="SignIn" >Exit</button></li>
        //     </ul>
        // </nav>
      <nav className="appNavBar">
        <span id="navLogo">Logo</span>
        <ul id="nav-mobile" className="">
          {/*<li><NavLink to="/create">To</NavLink></li>*/}
          <li><a href="">LOL</a></li>
          <li><a href="/" onClick={logoutHandler}>Exit</a></li>
        </ul>
      </nav>
    )
}