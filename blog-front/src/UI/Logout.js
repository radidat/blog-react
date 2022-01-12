import {FiLogOut} from 'react-icons/fi';
import {IconContext} from 'react-icons'; 
 



const LogoutIcon = ()=>{

    return(<IconContext.Provider value={{color:'inherit'}}>
           <div>
               <FiLogOut/>
           </div>
    </IconContext.Provider>)
}
export default LogoutIcon;