import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.scss'
import Input from '../input/input'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'


const Login = () => {

    const  navigate = useNavigate();
    const [value, setValue] = useState({
        email: '',
        password: ''
    });

    const [errormsg, setErrorMsg] = useState(" ");
    const [disButton, setDisButton] = useState(false);

    const handleSubmit = () => {
        //checking the feilds
        if(!value.email || !value.password){
            setErrorMsg('All fields are required');
            return;
        }
        setErrorMsg("");

        setDisButton(true);
        signInWithEmailAndPassword(auth,value.email, value.password).then(async(res) => {
            setDisButton(false);

            //redirect to dashboard page after successful registration
            navigate('/hero')
        }).catch((err) => {
        setDisButton(false);
        setErrorMsg(err.message); 
    });

    };


  return (
    <div className='container'>
        <div className="box">
            <h1>
                Welcome, back!
            </h1>
            <Input placeholder="Enter Email Address" type="email" 
                onChange={(event) => setValue((prev) => ({...prev, email: event.target.value}))}  
            />
            <Input placeholder="Enter Password" type="password" 
                onChange={(event) => setValue((prev) => ({...prev, password: event.target.value}))}  
            />

            <div className="footer">
                <b className='errorm'>{errormsg}</b>
                <button disabled={disButton} type='button' onClick={handleSubmit}>Login</button>
                <p>
                    Create new account! {" "}
                    <span>
                        <Link to="/signup">Signup</Link>
                        </span>
                </p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Login




