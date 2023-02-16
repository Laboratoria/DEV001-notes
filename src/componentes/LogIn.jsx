import  React  from 'react';
import { loginWhitGoogle } from "../Firebase/func";
import { useNavigate } from "react-router-dom";
// import './App.css';


// const Login = () => <h1>Estamos en Login</h1>;

const Login =() => {
  const navigate = useNavigate();
  function LoginGogle() {
    loginWhitGoogle ()
    .then ((credentials) =>{
      console.log(credentials.user)
      navigate('/notes')
    })
    .catch((error) =>{
      console.log(error)
    })
  }


return (
  <button onClick={LoginGogle}>Ingresa con Google</button>
)
}
export default Login;