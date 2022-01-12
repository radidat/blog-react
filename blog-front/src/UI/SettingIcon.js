import {AiFillSetting} from 'react-icons/ai'; 
import { IconContext } from 'react-icons';


const SettingIcon=()=>{

    return(<IconContext.Provider value={{color:'inherit'}}>
              <div>
                  <AiFillSetting/>
              </div>
    </IconContext.Provider>)
}

export default SettingIcon;