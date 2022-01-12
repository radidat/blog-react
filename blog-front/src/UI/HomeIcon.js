import {IconContext} from 'react-icons'; 
import {FaHome} from "react-icons/fa"; 



const HomeIcon = ()=>{

    return(<IconContext.Provider value={{color:'inherit'}}>
           <div>
               <FaHome/>
           </div>
    </IconContext.Provider>)
}
export default HomeIcon;