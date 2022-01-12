import React, {useState} from 'react'; 
import styled from 'styled-components';
import { InputConntect } from '../../UI/Input';
import Button from '../../UI/Button';
import {useAuth} from '../../context/AuthContext'; 
import AddFile from '../../UI/AddFile';


const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
  }; 
const SignUp =()=>{ 

    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [password, setPassword]= useState('');
    const [email, setEmail]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const [photoProfil, setPhotoProfil]= useState('');
    const [error, setError]= useState('');
   const {onSignUp} = useAuth(); 


   const onSubmiDataSignUp = async (e)=>{ 
             e.preventDefault();


    const data = {
           firstName, 
           lastName, 
           password, 
           email,
           photoProfil
    }
        if(password !== confirmPassword){
            setError('votre mot de passe ne correspond pas, veuillez réessayer à nouveau');
        }
         await onSignUp(data); 
              
   }

   const onChangePhoto=async (e)=>{
         const file = e.target.files[0]; 
         const uniqSuffix = Date.now()+ '-'+ Math.floor(Math.random() * 1E9);
         const extension = MIME_TYPES[file.type]; 
         const name  = file.name.split('.')[0];  
         const fileName = name +'-'+uniqSuffix  + '.'+ extension;
        const formData = new FormData(); 
        if(file){ 
            formData.append('photoProfil',file, fileName);
          await fetch('http://localhost:5000/api/auth/upload', {
                method: 'POST',
                body: formData
              })
              .then(response => response.json())
              .then(data => {
                setPhotoProfil(data.filename);
              })
              .catch(error => {
                console.error(error)
              })
            }
             
   }

   console.log(photoProfil)
    return <SignUpContainer>
             <form className='form-signup' encType='multipart/form-data'>
                 <h5 className='title-signup'>S'inscrire</h5>
                 <div>
                     <InputConntect type='text' id='firstName' name='firstName' placeholder='Nom' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                 </div>
                 <div>
                     <InputConntect type='text' id='lastName' name='lastName' placeholder='Prenom'value={lastName}   onChange={(e)=>setLastName(e.target.value)} />
                 </div>
                 <div>
                     <InputConntect type='text' id='emailAdress' name='email' placeholder='addresse email' value={email}   onChange={(e)=>setEmail(e.target.value)} />
                 </div>
                 <div>
                     <InputConntect type= 'password' id='password' autoComplete = "new-password" name='password' placeholder='mot de passe' value={password}   onChange={(e)=>setPassword(e.target.value)}  />
                 </div>
                 <div>
                     <InputConntect type='password' id='confirmPassword'autoComplete = "new-password"  name='confirmPassword' placeholder='confirmer le mot de passe' value={confirmPassword}   onChange={(e)=>setConfirmPassword(e.target.value)} />
                 </div>
                 <div className='photoProfile'>
                     <label>Ajouter une photo</label>
                 <AddFile name='photoProfile' onChange={onChangePhoto}/>
                 </div>
                 <Button type='submit' className='btn-signup' onSubmit={onSubmiDataSignUp} >S'inscrire</Button>
             </form>
    </SignUpContainer>
}

 export const SignUpContainer = styled.div`             
              display: flex; 
              justify-content: center; 
              align-items: center;
              margin-top: 150px;
              border: 1px solid black; 
              margin-inline:15px;
              height: 600px;
              border-radius: 10px;  
              .form-signup{
                  width: 250px;
              }
              .title-signup{ 
                  text-align: center; 
                  font-size: 25px;
              }

              .photoProfile{
                  margin-top:15px;
              }
`; 

export default SignUp