import React from 'react'; 
import Card from '../../components/Card'; 
import styled from 'styled-components'; 
import {useEffect, useState} from 'react'; 
import NavBar from '../../components/NavBarBlog';
import Biography from '../../components/Biography';
import { useWindowSize } from '../../utils/resizeWindow';
import BurgerButton from '../../UI/BurgerButton';
import { Link, useSearchParams } from 'react-router-dom';
const Home =()=>{

    const [allPosts, setAllPosts]=useState([]);
    const [innerWidth, innerHeight] = useWindowSize(); 
    
    const [searchParams, setSearchParams]= useSearchParams(); 

    const filterCategorie = searchParams.get('filter'); 


    const [open, setOpen]= useState(false); 
    const onOpenMenu =()=>{ 
         setOpen(!open)
    }

    useEffect(()=>{ 
         function fetchAllPosts(){
             let request;
           if(filterCategorie!==null){ 
            request = `http://localhost:5000/api/posts?filterPost=${filterCategorie}`;
           } else{ 
            request  = `http://localhost:5000/api/posts`; 
           } 
          console.log(request)
          try{ 
            fetch(request).then(response => response.json())
            .then(data => setAllPosts(data) )
            
          }catch(err){ 
              console.log(err)
          }     
       }
       fetchAllPosts();
    },[filterCategorie])

    console.log(allPosts)
    return(<ContainerHome>
         { innerWidth >=950? 
         <NavBar/> 
            :  
           <div className='navbar'>
           <BurgerButton open={open} onClick={onOpenMenu}/> 
          <NavMenuResponsive open={open}/>
          </div>
           }
        
           <div className='container-posts-bio'>
           <div className='container-posts'>
           { allPosts && allPosts.map(post =>{
       return  <Card key={post._id} post={post}/>
     })}
      </div> 
       <div className='container-bio'>
             <Biography/>
       </div>
           </div>
    </ContainerHome>)
}

const ContainerHome = styled.div`
    .container-posts{ 
        transform: translateY(100px);
         display:flex; 
         justify-content: center; 
         align-items: center;
         flex-direction: column;
         flex-wrap: wrap;
    }
    .navbar{ 
        display: block;
    }

    @media only screen and (min-width: 768px){
        .container-posts{ 
            margin-left:50px;
            width:600px;
            flex-direction: row; 
            align-items: stretch;
             justify-content: start;
        }
    }

    @media only screen and (min-width:950px){
        .container-posts{ 
            margin-left:25px;
            width:950px;
            justify-content: center; 
            align-items: center;
        }
      

    }
    @media only screen and (min-width:950px){
        .container-posts{ 
            margin-left:25px;
            width:100%;
            justify-content: center; 
            align-items: center;
        }
    
    }
    @media only screen and (min-width:1024px){
        .container-posts-bio{ 
           display: flex;
        }
        .container-bio{ 
            transform: translate( -25px, 150px);
        }
      
    }
`; 


 export const NavMenuResponsive = ({open})=>{ 

    return(<NavMenuContainer open={open} >
             <div className='menuContainer'>
                 <ul>
                     <li><Link to='/dashboard/home'>
                         <p>Developpement web</p>
                     </Link>
                         </li>
                     <li>
                         <Link to='/dashboard/write-article'>
                     <p>Marketing digital</p>
                         </Link> 
                     </li>
                     <li>
                         <Link to='/dashboard/profil-admin'>
                     <p>copywritng</p>
                         </Link>
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

              .menuContainer{
                     margin-top: 150px;
              }
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
              ul li p{
                  margin-left: 20px;
              }
              ul >li:hover{
                    transform : scale(1.1)
              }
`;

export default Home; 
