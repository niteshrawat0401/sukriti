import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signupUser } from './redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const init = {
    name: '',
    userName: '',
    passWord: ''
}
const Signup = () => {
    const [signUp, setSignUpData] = useState(init);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { loading, error } = useSelector((state) => state.auth);


    const handleChange = (e)=>{
        const {name, value} = e.target;
        setSignUpData({...signUp, [name]: value})
    }

    const handleSignUp = (e)=>{
        e.preventDefault();
        dispatch(signupUser(signUp));
        setSignUpData(init)
        navigate('/')
    }

  return (
    <div>
        <div>
            <input type='text' placeholder='name' name='name' value={signUp.name} onChange={handleChange}/>
            <br />
            <input type='text' placeholder='UserName' name='userName' value={signUp.userName} onChange={handleChange}/>
            <br />
            <input type='passWord' placeholder='passWord' name='passWord' value={signUp.passWord} onChange={handleChange}/>
            <br />
            <button type='submit' onClick={handleSignUp}>SignUp</button>
            <br/>
            <p onClick={()=>navigate('/')} style={{color: 'blue', cursor: 'pointer'}}>LogIn</p>
        </div>
    </div>
  )
}

export default Signup