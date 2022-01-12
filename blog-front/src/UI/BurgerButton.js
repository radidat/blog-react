import React from 'react'; 
import styled from 'styled-components'; 


const BurgerButton =({open,onClick})=>{


    console.log(open)

    return (<BurgerButtonContainer open={open} onClick={()=>onClick()}>
                  <div/>
                  <div/>
                  <div/>
    </BurgerButtonContainer>)
}


const BurgerButtonContainer = styled.button`
           
          border:none; 
           outline: none; 
           background: transparent;
           position:${ ({open})=>open ? 'fixed' : 'absolute' };
           z-index:1000;
            margin-top:25px;
            margin-left:15px;
           &{
               cursor: pointer;
           }
     
        div{
            width:30px; 
            height: 8px; 
            background-color:${ ({open})=>open ? '#fff' : '#1E2139' };
            border-radius: 25px;
            margin-bottom: 5px;
            transition: all 0.5s linear;
            position: relative;

        }
        div:nth-child(1){
            transform: ${ ({open})=>open ? 'rotate(45deg)' : 'rotate(0deg)' };
            top: ${({open})=> open ? '15px' :'0px'};
        }
       div:nth-child(2){
        transform: ${ ({open})=>open ? 'translateX(20px)' : 'translateX(0px)' };
            opacity:${({open})=> open ? '0': '1'}; 
        }
        div:nth-child(3){
            transform: ${ ({open})=>open ? 'rotate(-45deg)' : 'rotate(0deg)' };
            bottom:${({open})=> open ? '10px' :'0px'} ;
            opacity:1;
        }
`;  

export default BurgerButton; 