import React,{createContext, useState, useContext} from 'react'; 
import { useLocalStorage } from '../utils/useLocalStorage';

const authContext = createContext(); 


const AuthContextProvider = ({children})=>{

       const [currentUser, setCurrentUser]= useLocalStorage( 'user',null); 

    const onSignIn = async(data)=>{
        try{ 
         const response = await fetch('http://localhost:5000/api/auth/signin',{ 
             method:'POST',
             body: JSON.stringify(data),
             headers:{
                "Content-type": "application/json; charset=UTF-8"
             }
          })
           if(response.ok){
               const getData =  await response.json(); 
               setCurrentUser(getData);
               return Promise.resolve(getData)
           }
        }catch(err){ 
            console.log(err)
        }
}

    const onSignUp = async(data)=>{

               try{ 
                const response = await fetch('http://localhost:5000/api/auth/register',{ 
                    method:'POST',
                    body: JSON.stringify(data),
                    headers:{
                       "Content-type": "application/json; charset=UTF-8"
                    }
                 })
                  if(response.ok){
                      const getData =  await response.json(); 
                      setCurrentUser(getData);
                      return Promise.resolve(getData)
                  }
               }catch(err){ 
                    return Promise.reject(err)
               }
    }
    const valueAuth ={ 
       onSignUp, 
       onSignIn, 
       currentUser,
       setCurrentUser
    }
    return(<authContext.Provider value={valueAuth}>
                    {children}         
    </authContext.Provider>)
}



export default AuthContextProvider; 

export const useAuth = ()=> useContext(authContext); 