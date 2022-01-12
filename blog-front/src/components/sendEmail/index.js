import React from 'react'; 
import styled from 'styled-components';
import { InputConntect } from '../../UI/Input';
import { SignUpContainer} from '../SignUp'
import Button from '../../UI/Button';

const SendEmailSubscribe = ()=>{


    return(<SendEmailSubscribeContainer>
              <form className='form-emailSend'>
                    <h5 className='title-emailSend'>Mettez votre addresse email, je vous enverrai
                         le formulaire d'inscription. </h5>
                  <div>
                      <InputConntect id='sendEmail' name='email' placeholder=' email'/>
                  </div>
                  <Button type='submit' className='btn-signup'>Envoyer</Button>
              </form>
    </SendEmailSubscribeContainer>)
}



const SendEmailSubscribeContainer = styled(SignUpContainer)`
               height:200px;
                .form-emailSend{ 
                    width: 250px;
                }
                .title-emailSend{ 
                    text-align: center; 
                    font-size: 12px;
                    margin-bottom: 15px;
                }

               .form-emailSend button{
                    margin-top: 10px;
                }
`; 

export default SendEmailSubscribe;