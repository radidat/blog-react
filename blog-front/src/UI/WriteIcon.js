import {BsPenFill} from 'react-icons/bs'; 
import { IconContext } from 'react-icons';


const WriteIcon=()=>{

    return(<IconContext.Provider value={{color:'inherit'}}>
              <div>
                  <BsPenFill/>
              </div>
    </IconContext.Provider>)
}

export default WriteIcon;