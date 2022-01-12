import React, {useState, useEffect} from 'react'; 
import PostDetail from '../../components/PostDetail';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {url} from '../../utils/urlImages';
import NavBar from '../../components/NavBarBlog';
import BurgerButton from '../../UI/BurgerButton';
import { useWindowSize } from '../../utils/resizeWindow';
import { NavMenuResponsive } from '../Home';
const PostDetailPage =()=>{ 
    
    const [post, setPost]=useState({})
    const{id} =useParams();
    const [innerWidth, innerHeight] = useWindowSize(); 

    const [open, setOpen]= useState(false); 
    const onOpenMenu =()=>{ 
         setOpen(!open)
    }

    useEffect(()=>{
         function fetchPost(){
            fetch(`http://localhost:5000/api/posts/${id}`)
            .then(response => response.json()).then(data =>setPost(data))
        }
        fetchPost(); 
    },[id])

    return(<ContainerPostDetailPage>
         { innerWidth >=950? 
         <NavBar/> 
            :  
           <div className='navbar'>
           <BurgerButton open={open} onClick={onOpenMenu}/> 
          <NavMenuResponsive open={open}/>
          </div>
           }
                <section className='post-image'>
                    <img src={url + post.photoPost} alt='terre' className='main-image-post'/>
                    <div className='title-main-container'>
                    <h1 className='title-post'>{post.title}</h1>
                    </div>
                    <div className='profil-post'>
                        <img src={url + post.photoProfil}alt='profil-avatar' className='profil'/>
                        <div>
                            <p>{`${post.firstName} ${post?.lastName}`}</p>
                            <p>21h ago</p>
                        </div>
                    </div>
                </section>

             <section className='article'>
                 <h6 className='introduce'>{post.introduce}</h6>
                 <PostDetail content={post.content} />
             </section>
    </ContainerPostDetailPage>)

}

const ContainerPostDetailPage = styled.div`
                .post-image{
                    position: relative; 
                    transform: translateY(80px)
    
                    } 
                .title-post{ 
                    text-transform: capitalize;
                    position: absolute; 
                    text-align: left;
                    z-index: 2;
                    font-size: 20px; 
                    color:#fff;
                    bottom:100px;
                    left: 20px;
                    inline-size: 300px;
                    overflow-wrap: break-word !important;
                }
                 .main-image-post{ 
                    width:100%; 
                     height: 400px;
                     position: relative;
                }
                .post-image:after{
                    content:'';
                    background-color:rgba(0,0,0, 0.6);
                    z-index: 1; 
                    position: absolute;
                    top: 0; 
                    left:0; 
                    width:100%; 
                    height: 100%;                  
                }

                .profil-post{ 
                    width: 200px;
                    position: absolute;
                    left:15px; 
                    bottom:25px;
                    display: flex; 
                    color: #fff;
                    z-index: 3;
                }
              
                .profil{ 
                    width: 50px; 
                    height: 50px;
                    border-radius: 50%;
                    margin-right: 20px;
                }
                .article{
                    margin: 80px 25px;
                    display: flex; 
                    justify-content: center; 
                    align-items: center;
                    flex-wrap: wrap; 
                    flex-direction: row;
                }
                .introduce{
                    display: inline-block;
                    margin-top: 20px;
                    opacity: 0.7;
                   font-style: italic;
                   text-align: center;
                }
                @media only screen and (min-width: 425px){  
                    .title-post{
                        font-size: 22px;
                       inline-size: 400px;

                    }
                }    
        @media only screen and (min-width: 768px){ 
            .main-image-post{ 
                width:100%; 
                height: 600px;
            }
            .title-post{
                inline-size: 700px;
                font-size: 30px;
                text-align: center;
                 left: 150px;
                margin-bottom: 50px;
            }
            .profil-post{ 
                width:400px;
                padding-top: 100px;
                margin-left: 100px;
            }  
            .profil{ 
                width: 100px; 
                height:100px;
                margin-right: 25px;
            }
            .article{
                margin: 80px 100px;

            }
        }
        @media only screen and (min-width: 1024px){ 
            .post-image{
                transform: translateY(30px);
            }
            .title-post{
                inline-size: 1000px;
            }
        }
`; 
export default PostDetailPage; 