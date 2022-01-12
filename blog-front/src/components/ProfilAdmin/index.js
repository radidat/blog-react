import React from 'react'; 
import { useAuth } from '../../context/AuthContext';
import Button from '../../UI/Button';
const ProfilAdmin =()=>{

    const {setCurrentUser} = useAuth();

    const onLogout=()=>{   
        setCurrentUser(null); 
    }

    return(<Button onClick={onLogout}>se déconnecter</Button>)

}


export default ProfilAdmin;