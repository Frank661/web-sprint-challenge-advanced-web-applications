import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../api/axiosWithAuth";
import {useHistory} from "react-router"



const Login = () => {
  const history = useHistory();
  const [ form, setForm ] = useState({ 
    username: "", 
    password: "" });
  // make a post request to retrieve a token from the api

  const handleSubmit = (values) => {
    values.preventDefault();
    axiosWithAuth()
      .post("/login", form)
      .then((response) => {
        localStorage.setItem("authToken", response.data.payload);
        history.push("/bubbles");
      })
      .catch((err) => {
        console.log(err, "error at handlesubmit in login.js")
      })
  } 

  const handleChanges = (event) => {
    const newData = {
      ...form, [event.target.name] : event.target.value
    }
    setForm(newData);
  }

  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
 <h1>Welcome to the Bubble App!</h1>
      <p>Please Log in</p>
      <form onSubmit = {handleSubmit}>
            <label htmlFor = "username">
                username:
            <input
            type = "text" 
            name = "username"
            placeholder = "username"
            value = {form.username}
            data-testid="username"
            onChange = {handleChanges}
             />
            </label>
            <label htmlFor = "password">
                password:
            <input
            type = "password" 
            name = "password"
            placeholder = "password"
            value = {form.password}
            data-testid="password"
            onChange = {handleChanges}
             />
            </label>
            <button data-testid= "submit">Log in</button>
        </form>
    </>
  );
};

export default Login;
