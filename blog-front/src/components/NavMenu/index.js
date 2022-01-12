import React from 'react'; 
import styled from 'styled-components';
import HomeIcon from '../../UI/HomeIcon'
import SettingIcon from '../../UI/SettingIcon';
import WriteIcon from '../../UI/WriteIcon';
import { Link, useLocation} from 'react-router-dom';
import {url} from '../../utils/urlImages'
import { useAuth } from '../../context/AuthContext';
import LogoutIcon from '../../UI/Logout';
import Button from '../../UI/Button';

const NavMenu = ({open})=>{ 

    const {currentUser,setCurrentUser } = useAuth();
   
    const onLogout=()=>{   
        setCurrentUser(null); 
    }

    return(<NavMenuContainer open={open}>
             <div className='pictureProfile'>
                 <img src={url +currentUser.photoProfil} alt='profil-avatar' width='50px' height='50px'/>
                 <p>{currentUser.firstName} {currentUser.lastName}</p>
             </div>
             <div>
                 <ul>
                     <li><Link to='/dashboard/home'>
                     <HomeIcon/>
                         <p>Acceuil</p>
                     </Link>
                         </li>
                     <li>
                         <Link to='/dashboard/write-article'>
                         <WriteIcon/>
                     <p>Ecrire un article</p>
                         </Link> 
                     </li>
                     <li>
                         <Link to='/dashboard/profil-admin'>
                         <SettingIcon/>
                     <p>administrateur</p>
                         </Link>
                     </li>
                     <li>
                         <button onClick={onLogout}>
                         <LogoutIcon/>
                     se déconnecter
                     </button>
                     </li>
                 </ul>
             </div>
    </NavMenuContainer>)
}

const NavMenuContainer = styled.div`
              height:100vh; 
              width:200px;
              background:#1E2139;
              color:#fff;
              margin:0; 
              padding:0;
              position: fixed;
              z-index:100;
              transition: all 0.5s linear;
              transform: ${({open})=> open ? 'translate(0%)': 'translate(-100%)'};

              .pictureProfile{ 
                margin-top:70px;
            }
              .pictureProfile img{ 
                  margin: 20px 30px 0px 20px;
                     border-radius: 50%; 
                     width:150px; 
                     height: 150px;
              }
              .pictureProfile p{ 
                  margin-top: 20px;
                  text-align:center; 
            }
              ul{ 
                list-style: none; 
                margin-top: 50px;
                width: 100%;
              }

              ul > li{
                   
                  display: flex; 
                  flex-direction: row; 
                   margin-bottom: 25px;
                   transform: scale(1);
                   transition: transform 0.3s linear;
                   cursor:pointer;
                   
                   border-top: 1px solid #fff;
                   padding: 10px 0px 0px 25px;

              }
              ul li a{
                  text-decoration: none; 
                  display: flex; 
                  color:#fff;
              }
              ul li p{
                  margin-left: 20px;
              }
              ul >li:hover{
                    transform : scale(1.1)
              }
             ul li button{ 
                    display: flex;
                     justify-content: space-around;
                     margin-left:-15px;
                    background:none;
                    border: none;
                  color:#fff;
                    width: 100%
              }
              @media only screen and (min-width: 1024px){ 
                  transform: translate(0%);
                  display: block;
              }

`;
export default NavMenu;