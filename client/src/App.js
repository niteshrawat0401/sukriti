import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signUp" element={<Signup/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
