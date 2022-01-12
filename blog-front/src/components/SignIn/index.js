import React,{useState} from 'react'; 
import styled from 'styled-components';
import { InputConntect } from '../../UI/Input';
import { SignUpContainer } from '../SignUp';
import {useAuth}from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../UI/Button';
const SignIn =()=>{ 
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const {onSignIn } = useAuth();
  
       let navigate = useNavigate();

    const onSubmiDataSignIn= async (e)=>{ 
        e.preventDefault();
const data = {
      password, 
       email
    }
       const getData  =  await onSignIn(data)
         if(getData) { 
               navigate('/dashboard/home')
         }
         console.log(getData)
}

    return <SignInContainer>
             <form className='form-signup'>
                 <h5 className='title-signup'>Se connecter</h5>
                  <div>
                     <InputConntect type='text' id='Adresse email' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' placeholder=' Adresse email'/>
                 </div>
                 <div>
                     <InputConntect type='password' id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='mot de passe'/>
                 </div>
                 <Button type='submit' className='btn-signup' onClick={onSubmiDataSignIn} >Se connecter</Button>
                 <div className='forgotPassword-signup'>
            <Link to='/forgotPassword'>mot de passe oublié</Link>
            <Link to='/signup'>S'insrire</Link>
                 </div>
             </form>
    </SignInContainer>
}

const SignInContainer = styled(SignUpContainer)`             
                 
              height: 280px;
              .form-signup{
                  width: 250px;
              }
              .title-signup{ 
                  text-align: center; 
                  font-size: 25px;
              }

              .forgotPassword-signup{ 
                margin:15px;
              }
              .forgotPassword-signup a{
                  text-decoration: none;
                  display: block;
              }
`; 

export default SignIn