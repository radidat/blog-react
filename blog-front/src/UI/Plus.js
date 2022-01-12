import {FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components'; 
const Plus =()=>{


    return (<PlusContainer>
<IconContext.Provider value={{  className:'icon-plus'}}>
    <div>
        <FaPlus/>
    </div>
</IconContext.Provider>
    </PlusContainer>
    )
}

const PlusContainer = styled.div`
  
         
          .icon-plus:hover{
              color:#fff;
          }

          .icon-plus{
            color:#1E2139;
        }
`;

export default Plus;