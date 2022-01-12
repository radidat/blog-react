import React from 'react';
import styled from 'styled-components';
import {useAuth} from '../../context/AuthContext'; 
import {url} from '../../utils/urlImages'; 
const Biography = ()=>{ 

    const {currentUser}= useAuth(); 


    console.log(currentUser);

    return (<BiographyContainer>
              <div className='line'></div>
            <div className='biography'>
                <div className='profile-container'>
                <img src='/profil.jpg' className='profile'/>
                <h3>Oumrane Radidat</h3>
                </div>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                         sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software like 
                         Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
    </BiographyContainer>)
}



const BiographyContainer =  styled.aside`
           
          margin-top: 180px;
         .line{
             width: 300px; 
             height: 1px; 
             background-color: rgba(0, 0, 0,0.4);
             margin-left: 25px;
         }

          .biography { 
              margin: 50px 25px;
          }
        .profile-container{
            display: flex;
            margin-bottom: 30px;
        }
        .profile-container h3{
            margin-left: 25px;
            margin-top: 15px;
        }
          .profile{
              width: 50px; 
              height: 50px;
              border-radius: 50%; 
          }
        @media only screen and (min-width: 425px){ 
            .line{ 
                width: 375px;
            }
            .profile{ 
                width: 60px; 
                height: 60px;
            }
        }
        @media only screen and (min-width: 425px){ 
            .line{ 
                width: 700px;
            }
            .profile{ 
                width: 60px; 
                height: 60px;
            }
            .profile-container{
               
                margin-bottom: 15px;
            }
        }
        .profile-container h3{
            margin-left: 15px;
        }
        @media only screen and (min-width:1024px){
             .line{ 
                 display:none;
             }
             .profile-container{ 
                 display: block;
                text-align: center;
             }
          width: 350px;
          border: 1px solid rgba(0,0, 0, 0.4);
          .profile{ 
            width: 100px; 
            height: 100px;
        }
        }
`; 

export default Biography; 

