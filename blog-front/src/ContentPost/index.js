import React from 'react'; 
import styled from 'styled-components';
import {url} from '../utils/urlImages'


const ContentPost = ({paragraph})=>{ 
   

    console.log(paragraph)

    return(<ContainerContentPost>
            {paragraph.subTitle && <h4>{paragraph.subTitle}</h4> }
            {paragraph.writeParagraph &&<p>{paragraph.writeParagraph}</p> }
                { paragraph.photoArticle && <img src={url + paragraph.photoArticle} alt='terre-explosed'/> }
    </ContainerContentPost>)
}

const ContainerContentPost = styled.article`
                 text-align: center;
       h4{
           margin: 20px;
       }
       p{ 
           margin: 20px;
       }
      img{ 
          width: 300px; 
          height: 300px;
          display: block; 
          margin: 20px auto;
      }

      @media only screen and (min-width: 425px){ 
        img{ 
            width: 400px; 
            height: 400px;
        }
      }

   @media only screen and (min-width: 768px){ 
    img{ 
        width: 700px; 
        height: 700px;
    }
      }

      @media only screen and (min-width: 950px){ 
        img{ 
            width:700px; 
            height: 400px;
        }
    }
`
export default ContentPost; 