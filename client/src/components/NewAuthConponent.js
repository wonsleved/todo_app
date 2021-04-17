import React, {useState,useEffect, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContex";

export const NewAuthComponent = ({display, closeDisplay, authType, changeAuthType}) => {


  var modal = document.getElementsByClassName('authorization')[0];
// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      closeDisplay();
    }
  }

  // Auth

  const auth = useContext(AuthContext);
  const message = useMessage();
  const {loading, request, error, clearError} = useHttp();
  const [form, setForm] = useState({
    email: '', password: ''
  });

  useEffect( () => {
    message(error);
    clearError();
  }, [error, message, clearError]);



  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register',
        'POST',
        {...form})
      message(data.message);
    } catch (e) {
      console.log("reg", e.message);
    }
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login',
        'POST',
        {...form})
      auth.login(data.token, data.userId);
    } catch (e) {
      console.log("login", e.message);
    }
  }

  useEffect(() => {
    const type = authType;
    const authSpanToChange  = document.getElementById("authSpanToChange");
    const signUpInButton    = document.getElementById("signUpInButton");
    const switchAuthButton  = document.getElementById("switchAuthButton");
    if (type === "signIn") {
      authSpanToChange.innerHTML  = "Sing In to Get Started";
      signUpInButton.innerHTML    = "Sign In";
      switchAuthButton.innerHTML  = "Not a member yet? Sign up for free";
      switchAuthButton.className  = "singInButton";
    } else if (type === "signUp") {
      authSpanToChange.innerHTML  = "Sing Up to Get Started";
      signUpInButton.innerHTML    = "Sign Up";
      switchAuthButton.innerHTML  = "Have an account? Click to sign in";
      switchAuthButton.className  = "singUpButton";
    }
  }, [authType])


  useEffect(() => {
    const type              = authType;
    const signUpInButton    = document.getElementById("signUpInButton");
    if (type === "signIn") {
      signUpInButton.onclick      = loginHandler;
    } else if (type === "signUp") {
      signUpInButton.onclick      = registerHandler;
    }
  }, [authType, form])

  return (

    <section className="authorization" style={{display: display}}>

      <div className="form animate">
        <div className="close">
          <button onClick={closeDisplay}>&times;</button>
        </div>
              <div className="SignInForm">

                <span id="authSpanToChange">Sing Up/In to Get Started</span>


                <div className="inputFields">

                  <span id="authErrorMessage">Error</span>

                  <label htmlFor="email">Email</label>
                  <div className="input-field">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      value={form.email}
                      onChange={changeHandler}
                    />
                  </div>

                  <label htmlFor="email">Password</label>
                  <div className="input-field">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={changeHandler}
                    />
                  </div>

                  <div className="authButton">
                    <button
                      id="signUpInButton"
                      disabled={loading}
                      onClick={loginHandler}
                    >
                    </button>

                    <div className="switchAuth">
                      <button
                        className=""
                        id="switchAuthButton"
                        onClick={changeAuthType}
                      >
                      </button>
                    </div>
                  </div>


                </div>
              </div>
      </div>

    </section>
  );

}