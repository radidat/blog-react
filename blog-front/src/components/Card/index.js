import React from 'react'; 
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { url } from '../../utils/urlImages';
import {categoriesColor}from '../../utils/optionsColor';
import {cutWord} from '../../utils/cutWord';
import { useAuth } from '../../context/AuthContext';

const Card = ({post})=>{

           

    return (<CardContainer>
               <Link to={`postDetail/${post?._id}`}>
               <img src={url + post?.photoPost } className='image-article' alt='terre-en-verre'/>

                <div className='container-article'>
                <div className='categories'>
                   <ul>
                       {post?.categories.map((categorie, index)=>{ 
                        return <li key={index} style={{backgroundColor: categoriesColor[categorie.value]}}>{categorie.value}</li>
                       })}   
                   </ul>
                </div>
                <div className='resume-article'>
                    <h5>{post?.title}</h5>
                    <p>{post.introduce && cutWord(post.introduce, 150)}</p>
                </div>
                <div className='line-article'></div>
                <div className='avatar-article'>
                    <img src={`${url}${post?.photoProfil}`} className='avatar' alt='avatar-admin'/>
                    <div>
                        <p>{`${post?.firstName} ${post?.lastName}`}</p>
                        <p className='post-date'>21h ago</p>
                    </div>
                </div>
                </div>
                
               </Link>
    </CardContainer>)
}


const CardContainer = styled.article`
       width: 280px; 
       height:600px;
       margin-left: 15px;
       border-radius:15px;
       box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
       
       a{
           text-decoration: none;
           color: #141625;
       }
       .container-article{
           padding: 0 15px;
       }
       .image-article{ 
       border-top-left-radius:15px;
       border-top-right-radius:15px;
        width:280px;
         height:200px
       }
        .resume-article p{ 
            font-size:16px;
            font-weight: ligther;
            opacity: 0.8;
        }
        .resume-article h5{ 
            font-style: italic;
            margin-bottom: 10px;
        }
       .categories{
           padding: 15px;
       }

       .categories ul{ 
           display: flex;
           flex-wrap: wrap;
       }
       .categories ul li{ 
           list-style: none;
           margin-right: 15px;
            padding: 0 15px;
           margin-bottom: 10px;
           color: #fff;
            font-size:12px;
           border-radius: 25px;
       }

       .line-article{ 
           width:100%; 
           height: 0.2px; 
           margin-top: 25px;
           background-color:rgba(0, 0, 0, 0.3); 
       }

       .avatar-article{ 
           display: flex;
           margin-top: 15px;
       }
       .avatar{
           width: 50px; 
           height: 50px;
           border-radius: 50%;
           margin-right: 20px;
        }
    
        @media only screen and (min-width: 425px){ 
           width: 380px;
           margin-bottom: 35px;
           .image-article{ 
               width: 380px;
               height: 250px;
           }
        }
        @media only screen and (min-width: 768px){
            width: 280px;
            margin-bottom: 35px;
            .image-article{ 
                width: 280px;
                height: 250px;
            }
`;


export default Card;