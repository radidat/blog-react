import {MdWbSunny} from 'react-icons/md';
import {IconContext} from 'react-icons'; 
 



const SunIcon = ()=>{

    return(<IconContext.Provider value={{color:'red', size:'25px'}}>
           <div>
               <MdWbSunny/>
           </div>
    </IconContext.Provider>)
}
export default SunIcon;