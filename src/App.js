import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import LoginForm from './Components/Login/LoginForm';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://successful-eel-pea-coat.cyclic.app"
// axios.defaults.baseURL = "http://localhost:8000"


function App() {
  return (
    <>
      <Toaster position='top-right' toastOptions={{
        style: {
          border: '2px solid white',
          padding: '20px',
          fontSize: '15px',
        }
      }} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </>

  )

}
export default App;
