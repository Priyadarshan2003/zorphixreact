import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import LoginForm from './Components/Login/LoginForm';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000"


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginForm />} />
    </Routes>
  )

}
export default App;
