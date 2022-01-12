import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {cutWord} from '../../utils/cutWord';
import NoPost from '../NoPost';

const DashboardHome =()=>{ 

    const [posts, setPosts]=useState([])
   
    
    useEffect(()=>{
        function fetchPosts(){
            const request = 'http://localhost:5000/api/posts';
              try{ 
                fetch(request).then(response => response.json())
                .then(data => setPosts(data) )
                
              }catch(err){ 
                  console.log(err)
              }     
           }
           fetchPosts();
    },[])

    console.log(posts)
    return(<DashboardHomeContainer>
              {posts.length > 0 ? 
              <div className='table-responsive'>
              <table className='table'>
                  <thead>
                       <tr>
                           <th>#</th>
                           <th>titre de l'article</th>
                           <th>Ecrit par</th>
                           <th> date de publication</th>
                           <th>statut</th> 
                           
                       </tr>
                  </thead>
                  <tbody>
                      {posts && posts.map(post =>{
                   return <PostTable key={post._id} post={post}/>
                   })}
                  </tbody>
              </table>
          </div>
                : 
                <NoPost/>
                } 
    </DashboardHomeContainer>)
}

const PostTable = ({post})=>{ 

    const navigate = useNavigate(); 

    const onDeletePost = async()=>{
           
        try{
         fetch(`http://localhost:5000/api/posts/${post._id}`,{
             method:'DELETE', 
             headers:{
                 "Content-type": "application/json; charset=UTF-8"
             }
         })
         .then(response => response.json()).then(()=> navigate(0) );
        }catch(err){
               console.log(err)
        }
    }

    return(<tr>
    <Link to={`/dashboard/editPost/${post._id}`}>
        <td data-label='#' >{post._id.substring(0,10)}</td>
        <td data-label="Titre de l'article" > {post.title && cutWord(post.title, 15)}</td>
        <td data-label='Ecrit par' >{`${post.firstName} ${post.lastName}`}</td>
        <td data-label='Date de publication' >12/06/2021</td>
        <td data-label='Statut' >{post.status}</td>
        </Link>
        <td className='remove' ><Button className='btn-remove-post' onClick={onDeletePost}>supprimer</Button></td>
        </tr>)
}

const DashboardHomeContainer = styled.div`

  
                       .table-responsive{
                        position: relative; 
                        top: 200px; 
                       color:#252945;
                        margin-inline: 15px;
                        
                         }
                   
                    .table tbody, .table tr,
                     .table td, .table thead{ 
                        display: block;
                    }
                    .table thead{ 
                        display: none;
                    }
                   .table{
                       border-collapse: collapse;
                       width: 100%;
                   }
                    .table thead{
                        background-color:#1E2139;
                        color:#fff;
                    }
                     .table tbody tr td:nth-child(2n){ 
                        background:#252945;
                        color: #fff;
                     }
                    
  
    .table tbody tr td{ 
        text-align: center;
        padding-left: 50%; 
        position: relative;
        border: 1px solid #1E2139;
    }
      tbody tr{ 
          border:0px;
     }
    .table td::before{
        content: attr(data-label); 
        position: absolute; 
        left:0; 
        width: 50%; 
        padding-left: 25px; 
        font-weight:600 ;
        font-size: 14px; 
        text-align:left;
        background-color:#141625;
        height:100%;
        color: #fff;
        margin: 0; 
        padding:0;
        border-bottom: 0.5px solid #fff;
    
    }
    tr a{
        text-decoration: none;
    }
    .table td.remove{ 
        background-color: #fff !important;
        border:none;
        padding-top: 15px;
    }
    .table td.remove::before{
        background-color: #fff;
    }

    @media only screen and (min-width: 768px){     
            
           width: 700px;
         .table td::before{
             display: none;
         }
         .table thead{ 
             display: inline-block;
             width:100%;
         }
         .table tbody, .table tr,
         .table td, .table thead, { 
            display: block;
        }

        .table{ 
            border: 1px solid black;
        }
        .table tbody tr:nth-child(2n)  a td { 
            color: #fff !important;
         }
         .table tbody tr:nth-child(1n) a td { 
            color: #141625;
         }
        .table tbody tr  td{ 
            padding-left:0%;
            position: relative;
            border:none;
             display: inline-block;
        }
         tr { 
            padding-left:0; 
            position: relative;
            border-bottom: 1px solid black;
            white-space: nowrap;
        }
        td, th{ 
            padding: 25px 0px;
           width:15%;
            text-align: left;
        }
        
        .table tbody{ 
            width:100%;
        }
        .table td.remove{ 
            background:none !important;
            padding-top: 15px;
        }
        .table tbody tr td:nth-child(2n){ 
            background:none;
            color:inherit;
         }
         .table tbody tr:nth-child(2n){ 
            background:#141625;
            color: #fff ;
         }
       
    }
    @media only screen and (min-width: 950px){ 
        width: 900px;
        margin-left: 5%;
    }
    @media only screen and (min-width: 1024px){ 
     
        margin-left: 15%;
        .table{ 
            width: 1000px;
        }
    }
    @media only screen and (min-width: 1200px){ 
     
        margin-left: 15%;
        .table{ 
            width: 1200px;
        }
       
    }
`; 

export default DashboardHome;