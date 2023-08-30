import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import LoginForm from './Components/Login/LoginForm';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginForm />} />
    </Routes>
  )

}
export default App;
