import {FaMoon} from 'react-icons/fa';
import {IconContext} from 'react-icons'; 
 



const MoonIcon = ()=>{

    return(<IconContext.Provider value={{color:'red', size:'25px'}}>
           <div>
               <FaMoon/>
           </div>
    </IconContext.Provider>)
}
export default MoonIcon;
