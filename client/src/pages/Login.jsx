import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './redux/authSlice';


const init = {
    userName: '',
    passWord: ''
}

const Login = () => {
    const [logIn, setLogInData] = useState(init);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { loading, error } = useSelector((state) => state.auth);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setLogInData({...logIn, [name]: value})
    }

    const handleLogIn = (e)=>{
    e.preventDefault();
    dispatch(loginUser(logIn));
    setLogInData(logIn)
    navigate('/user')
    }


  return (
    <div>
        <div>
            <input type='text' placeholder='UserName' name='userName' value={logIn.userName} onChange={handleChange}/>
            <br />
            <input type='passWord' placeholder='passWord' name='passWord' value={logIn.passWord} onChange={handleChange}/>
            <br />
            <button type='submit' onClick={handleLogIn}>Login</button>
            <br/>
            <p onClick={()=>navigate('/signUp')} style={{color: 'blue', cursor: 'pointer'}}>Signup</p>
        </div>
    </div>
  )
}

export default Login