import styled from 'styled-components'; 


const Textarea = styled.textarea.attrs((props)=>({
     placeholder: props.placeholder
}))`

        outline: none; 
        border: 1px solid rgba(0,0,0,0.4); 
        border-radius: 10px;
         &.introduce{ 
             margin-top: 25px;
             
             text decoration: none;
             margin-left: 25px;
             width: ${({width})=> width }
         }

         &.introduce::placeholder{ 
             text-align: center;
             padding-top: 10px;
        }
         &::placeholder{ 
             text-transfrom: capitalize;
         }
         &.paragraph{ 
             height:200px;
             margin-bottom: 25px;
             margin-left: -25px;
             width: 250px;
         }

         @media only screen and (min-width: 375px){
             &.introduce{
                 margin-left: 55px;
             }
             &.paragraph{ 
                margin-left:2px;
                width: 250px;
            }
         }
         @media only screen and (min-width: 425px){
            &.introduce{
                margin-left: 55px;
                width: 325px;
            }
            &.paragraph{ 
               margin-left:2px;
               width: 325px;
           }
        }
        @media only screen and (min-width: 768px){ 
            &.introduce{
                 height: 150px;
                width: 625px;
            }
            &.paragraph{ 
               width: 625px;
               height: 250px;
           }
        }
        @media only screen and (min-width: 950px){ 
            &.introduce{
                width:750px;
            }
            &.paragraph{ 
               width: 650px;
           }
        }
        @media only screen and (min-width: 1024px){ 
            &.introduce{
                width:700px;
            }
            &.paragraph{ 
               width: 600px;
           }
        }
        @media only screen and (min-width: 1200px){ 
            &.introduce{
                width:800px;
            }
            &.paragraph{ 
               width: 700px;
           }
        }
`;




export default Textarea;