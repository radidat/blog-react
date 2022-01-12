import React from 'react'; 
import ContentPost from '../../ContentPost';
import styled from 'styled-components';



const PostDetail = ({content})=>{


console.log(content)
   
    return(<ContainerPostDetail>  
        {content && content.map(paragraph =>{ 
            return <ContentPost key={paragraph.id} paragraph={paragraph}/>
        })}   
    </ContainerPostDetail>)

}



const ContainerPostDetail = styled.div`
     
margin-top: 50px;

`;


export default PostDetail; 