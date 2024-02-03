import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './sign.scss'
import Input from '../input/input'
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from '../../firebase'

const Signup = () => {
    const  navigate = useNavigate();
    const [value, setValue] = useState({
        name:'',
        email: '',
        password: ''
    });

    const [errormsg, setErrorMsg] = useState(" ");
    const [disButton, setDisButton] = useState(false);

    const handleSubmit = () => {
        //checking the feilds
        if(!value.name || !value.email || !value.password){
            setErrorMsg('All fields are required');
            return;
        }
        setErrorMsg("");

        setDisButton(true);
        createUserWithEmailAndPassword(auth,value.email, value.password).then(async(res) => {
            setDisButton(false);
            const user = res.user;
            await updateProfile(user,{
                displayName : value.name
            });
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
                Create Account
            </h1>
            <Input placeholder="Enter Your Name" type="text" 
                onChange={(event) => setValue((prev) => ({...prev, name: event.target.value}))
            }
            />
            <Input placeholder="Enter Email Address" type="email" 
                onChange={(event) => setValue((prev) => ({...prev, email: event.target.value}))
            }
            />
            <Input placeholder="Enter Password" type="password"  
                onChange={(event) => setValue((prev) => ({...prev, password: event.target.value}))
            }
            />

            <div className="footer">
                <b className='error'>{errormsg}</b>
                <button type='button' onClick={handleSubmit} disabled={disButton}>Signup</button>
                <p>
                    Already have an account?{" "}
                    <span>
                        <Link to="/login">Login</Link>
                        </span>
                </p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Signup

