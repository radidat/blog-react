import React, {useState}from 'react'; 
import BurgerButton from '../../UI/BurgerButton';
import styled from 'styled-components';
import NavMenu from '../../components/NavMenu';
import { useAuth } from '../../context/AuthContext';
import { useWindowSize } from '../../utils/resizeWindow';

const Dashboard =({children})=>{

    const [open, setOpen]= useState(false); 
    const {currentUser} = useAuth();
    const [innerWidth]= useWindowSize(); 

    const onOpenMenu =()=>{ 
         setOpen(!open)
    }


    return(<DashboardContainer>
        <div className='navbar'>
            { innerWidth <= 1024 && <BurgerButton open={open} onClick={onOpenMenu}/>  } 
            <NavMenu open={open}/>
            </div>
            <div className='child-component'>
             { children && children}
            </div>
    </DashboardContainer>)
}

Dashboard.defaultProps ={children: null}
const DashboardContainer = styled.div`   

              .navbar{
                  display:block;
              }
     
`;

export default Dashboard;