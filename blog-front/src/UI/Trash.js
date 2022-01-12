import{FaTrash}from 'react-icons/fa'; 
import {IconContext} from 'react-icons'; 



const Trash = ()=>{

    return(<IconContext.Provider value={{color:'#fff', size:'25px'}}>
           <div>
               <FaTrash/>
           </div>
    </IconContext.Provider>)
}

export default Trash;