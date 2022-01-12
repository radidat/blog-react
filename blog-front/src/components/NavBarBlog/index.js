import React from 'react'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const navBar = ()=>{ 
  

    return (<NavBarContainer>
           <ul className='navBar'>
               <li><Link to='/'>Acceuil</Link></li>
               <li><Link to='/?filter=developpement web'>Developpement web</Link></li>
               <li><Link to='/?filter=marketing digital'>marketing digital</Link></li>
               <li><Link to='/?filter=copywritting'>copywritting</Link></li>
               <li><Link to='/?filter=javascript'>javascript</Link></li>
           </ul>
    </NavBarContainer>)
}


const NavBarContainer = styled.div`
         
       display: flex; 
       justify-content: center; 
       align-items: center; 
       box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
       width:700px;
       margin: 80px 0  80px 25px;
       height: 80px;
       border-radius: 25px;
         .navBar li{ 
              display: inline-block;
              margin-right: 50px;
              cursor: pointer;
         }
         .navBar li a{ 
            text-decoration:none;
            color: #141625;
            padding: 8px;
            border-radius: 25px; 
            transition: 0.2s all linear;

               }
         .navBar li:hover a{ 
            border: 1px solid rgba(0, 0, 0, 0.5);
            background-color:#141625;
            color: #fff;              
         }

         @media only screen and (min-width: 1024px){  
             width: 900px;
             margin-left: 10%;
               
         }
         @media only screen and (min-width: 1200px){  
            width: 1100px;
              
        }
`; 
export default navBar; 