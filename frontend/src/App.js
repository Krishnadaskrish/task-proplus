import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import New from './components/New';
import Register from './LoginAndSignUp/Register';
import SignIn from './LoginAndSignUp/SignIn';
import axios from 'axios';
import Input from './Form/Input';


export const Axios = axios.create({
  baseURL : "http://localhost:4000",
  headers: {
    "Content-Type":"application/json",
    Authorization: localStorage.getItem('jwt_token'),
  }

})

function App() {
  return (
    <>

    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/new' element = {<New/>} />
      <Route path = '/reg' element = {<Register/>} />
      <Route path = '/log' element = {<SignIn/>} />
      <Route path = '/input' element = {<Input/>} />





    </Routes>
    
    
    
    
    
    
    
    </>
  );
}

export default App;
