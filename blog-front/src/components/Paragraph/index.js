import React from 'react'; 
import styled from 'styled-components'
import { InputPost } from '../../UI/Input';
import Textarea from '../../UI/Textarea';
import Trash from '../../UI/Trash';
import Button from '../../UI/Button';
import AddFileContainer from '../../UI/AddFile';
import Plus from '../../UI/Plus';
const Paragraph = ({paragraph, onChangeParagraph, onRemoveParagraph, onChangeImagePost})=>{

     const {id, subTitle, writeParagraph}= paragraph;

console.log(id)
    return(<ParagraphContainer>
            <div>
                <InputPost type='text' className='sub-title' name='subTitle' value={subTitle}
                 onChange={(e)=>onChangeParagraph(e, id)} placeholder='sous-titre'/>
            </div>
            <Textarea className='paragraph' name='writeParagraph'value={writeParagraph}  onChange={(e)=>onChangeParagraph(e, id)} 
            />
            <div className='btn-group-paragraph'>
                 <Button type='button'onClick={(e)=>onRemoveParagraph(e, id)}  className='btn-trash'><Trash/></Button>
             <div className="file-input">
  <input type="file" id={`photoArticle${id}`} name={`photoArticle${id}`} multiple  onChange={(e)=>onChangeImagePost(e, id)}className="file" accept='.png, .jpg, .jpeg' />
  <label htmlFor={`photoArticle${id}`}>
      <Plus className='icon-plus'/>
    <p className="file-name"></p>
  </label>
</div>
            </div>
    </ParagraphContainer>)
}
 export const ParagraphEdit = ({paragraph, onChangeEditParagraph, onRemoveParagraph,onChangeImagePost })=>{

  const {id, subTitle, writeParagraph}= paragraph;

const onChange = (e)=>{ 
    if(paragraph!==undefined){
      onChangeEditParagraph(e,id)
    }
  }



 return(<ParagraphContainer>
         <div>
             <InputPost type='text' className='sub-title' value={subTitle} onChange={(e)=>onChange(e)}  name='subTitle' 
              placeholder='sous-titre'/>
         </div>
       <div className='container-paragraph'>
       <Textarea className='paragraph'  value={writeParagraph} onChange={(e)=>onChange(e)} name='writeParagraph'
         />
       <div className='btn-group-paragraph'>
              <Button type='button'  className='btn-trash' onClick={(e)=>onRemoveParagraph(e, id)} ><Trash/></Button>
          <div className="file-input">
<input type="file"id='photoArticle' name='photoArticle'   className="file" accept='.png, .jpg, .jpeg' onChange={(e)=>onChangeImagePost(e, id)} />
<label htmlFor="photoArticle">
   <Plus className='icon-plus'/>
 <p className="file-name"></p>
</label>
</div>
         </div>
         </div>  
  
 </ParagraphContainer>)
}



const ParagraphContainer = styled.div`
            margin-left: 50px; 
            .container-paragraph{ 
                display: block; 
                margin:0;
                padding:0;
               
            }
            .btn-group-paragraph{
                display: flex; 
                justify-content: space-around;
            }
            .file {
              opacity: 0;
              width: 0.1px;
              height: 0.1px;
              position: absolute;
            }
             
            .file-input  {
            margin-top: 10px;
            margin-left: 9px;
            }
          
            .file-input label {
              display: block;
              position: relative;
              width: 25px;
              height: 25px;
              border-radius:50%;
              background-color: #fff;
              box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-weight: bold;
              cursor: pointer;
              transition: transform .2s ease-out;
            }
            .file-input label:hover { 
              background-color: #1E2139 ;
            }
          
            .file-name {
              position: absolute;
              bottom: -35px;
              left: 10px;
              font-size: 0.85rem;
              color: #555;
            }
            
            input:hover + label,
            input:focus + label {
              transform: scale(1.02);
            }

            @media only screen and (min-width: 850px){ 
              .btn-group-paragraph{ 
                display: block;
                float: right;
                margin: 10px 20px 0 5px;
              }
              .btn-group-paragraph button{ 
                     margin-bottom:50px;
                     margin-top: 50px;
              }
              .file-input{
                margin-left: -10px;
              }
          }  
          @media only screen and (min-width: 950px){ 
            .btn-group-paragraph{ 
              margin: 10px 20px 0 5px;
            }
            .btn-group-paragraph button{ 
                   margin-bottom:50px;
                   margin-top: 50px;
            }
            .file-input{
              margin-left: -10px;
            }
        }  
`;
export default Paragraph;