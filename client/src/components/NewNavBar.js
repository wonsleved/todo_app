import React, {useState, useEffect} from 'react';
import {NewAuthComponent} from "./NewAuthConponent"

export const NewNavBar = () => {
  const [display, setDisplay] = useState("none");
  const [authType, setAuthType] = useState(null);



  const changeAuthType = (event) => {
    const buttonClass = event.target.className;
    if (buttonClass == "singInButton") {
      setAuthType("signUp");
    } else {
      setAuthType("signIn");
    }
  }


  const openDisplaySignIn = () => {
    setDisplay("block");
    setAuthType("signIn");
  }

  const openDisplaySignUp = () => {
    setDisplay("block");
    setAuthType("signUp");
  }

  const closeDisplay = () => {
    setDisplay("none");
    setAuthType(null);
  }



  return (
    <nav className="NewNavBar">

      <div className="logo">
        <span>TODO</span>
      </div>

      <ul>
        {/*<li><a href="/auth">Sign In</a></li>*/}
        <li><button className="SignIn" onClick={openDisplaySignIn}>Sign In</button></li>
        {/*<li><a href="/register">Sign Up</a></li>*/}
        <li><button className="SignUp" onClick={openDisplaySignUp}>Sign Up</button></li>
      </ul>
      <NewAuthComponent display={display} closeDisplay={closeDisplay} authType={authType} changeAuthType={changeAuthType}/>

    </nav>
  );

}