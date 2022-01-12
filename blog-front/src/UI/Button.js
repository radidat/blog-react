import styled from 'styled-components';



const Button = styled.button`
               outline; 
               border: none;
               background: none;
               border-radius:10px;
               cursor: pointer;
               &.btn-trash{
                   background: red;
                   width: 100px; 
                   height:50px;
                   margin-left:-50px;
                 box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
                   transition: background 0.2s linear;
               }

         &.btn-trash:hover{
             background: #D12B07;
            }

            &.btn-signup{
              display: block; 
              background-color:#1E2139;
              margin-top: 25px;
              margin-left: 25px;
              width:200px;
              height: 35px;
              color: #fff;
             }
      &.btn-remove-post{ 
        width:125px;
       background-color:red;
       color: #fff;
       
      }

      &.btn-submit-post{
        color:#fff;
        margin-bottom: 40px;
        background-color:#1E2139;
        margin-top:25px; 
        margin-left: 50px;
        padding: 8px;
        width: 200px;
      }
      &.btn-put{
        background-color: red;
        color: #fff; 
        padding: 25px;
        width: 80%;
        margin: 15px 0px  0px 10%;
      
      }
      @media only screen  and (min-width: 425px){
        &.btn-submit-post{
          width: 325px;
        margin-left: 55px;

        }
      }
      @media only screen  and (min-width: 768px){
        &.btn-submit-post{
          margin-left:115px;
          width:500px;
        }
        &.btn-remove-post{
          width: 125px; 
          padding:10px;
        }
       
      }
`;  

export default Button;