import React from 'react';
import styled from 'styled-components'; 
import Plus from './Plus';


const AddFile = ({name, onChange, paragraph})=>{

  const handleChange =(e)=>{ 
     if(paragraph) onChange(e, paragraph.id); 
     onChange(e)

  }
    return <AddFileContainer>
             <div className="file-input">
  <input type="file"id={name} name={name} onChange={handleChange}className="file" accept='.png, .jpg, .jpeg' />
  <label htmlFor={name}>
      <Plus className='icon-plus'/>
    <p className="file-name"></p>
  </label>
</div>
    </AddFileContainer>
}



 export const AddFileContainer = styled.div`
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
  
  
`; 

export default AddFile;