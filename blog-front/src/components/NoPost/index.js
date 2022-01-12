import React from 'react'; 
import styled from 'styled-components'
import {Link} from 'react-router-dom';
const NoPost =()=>{

    
    return(<ContainerNoPost>
               <div>
                   <h1>il y a pas d'article, cliquez sur le lien ci-dessous pour rédiger un article</h1>
                   <Link to='/dashboard/write-article'> rédiger un article</Link>
               </div>
    </ContainerNoPost>)
}

const ContainerNoPost = styled.div`
      display: flex; 
      justify-content: center; 
      align-items: center; 
      
      div{
        transform: translate( 100px,200px);
      }

      h1{
        text-overflow: break-word; 
        font-size:25px;
         margin-bottom: 40px;
      }

      a{ 
      display-inline: block;
          text-align:center;
      }
     
`;

export default NoPost;