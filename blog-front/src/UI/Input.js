import styled from 'styled-components'

 export const InputPost = styled.input.attrs(props =>({
    type: props.type,
    placeholder: props.placeholder
}))`
      outline: none; 
      border-top: none;
      border-left: none; 
      border-right: none;
   border-bottom: 1px solid rgba(0, 0, 0, 0.3);
 
      &.main-title{
          margin-top: 15px;
          margin-left: 25px;
          font-weight: bolder;
      }
      &.main-title::placeholder{
          text-align: center;
          text-transform: capitalize;
          font-size: 20px;

      }
      &.sub-title{
          margin: 25px 0;
          font-weight: bold;
          text-transform: capitalize;
      }
      &.sub-title::placeholder{ 
          text-align: center;
          padding-top: 15px;
      }

      @media only screen and (min-width: 375px){ 
          &.main-title{
            width: 250px;
          }
          &.sub-title{
           width: 200px;
           margin-left: 25px;
        }
      }
      @media only screen and (min-width: 425px){ 
        &.main-title{
          width: 320px;
        }
        &.sub-title{
         width: 250px;
         margin-left: 25px;
      }
    }
    @media only screen and (min-width: 768px){ 
        &.main-title{
            width: 625px;
          }
          &.sub-title{
           width: 580px;
        }
    }
`;

 export const InputConntect = styled(InputPost).attrs(props =>({
     type: props.type
 }))`
         
         border : 1px solid black;
         border-radius: 5px;
        width:100%;
        margin: 15px 0;
        height: 35px;

        &::placeholder{
           
            padding-left:8px;
        }

`;
