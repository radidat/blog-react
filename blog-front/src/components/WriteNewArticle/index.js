import React, {useState} from 'react'; 
import { Input, InputPost } from '../../UI/Input';
import styled from 'styled-components';
import Textarea from '../../UI/Textarea';
import Paragraph from '../Paragraph';
import AddFile from '../../UI/AddFile';
import Button from '../../UI/Button';
import { useAuth } from '../../context/AuthContext';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {fetchApi} from '../../utils/fetchApi';
import {options} from '../../utils/optionsSelect';


const animatedComponents = makeAnimated();
const WriteNewArticle=()=>{ 

        const {currentUser}= useAuth();
console.log(currentUser?.photoProfil)
    const [formNewArticleParagraph, setFormNewArticleParagraph]= 
    useState([{id:'1637680817325-803515986', subTitle:'', writeParagraph:'', photoArticle:''}]); 
    const [mainTitle, setMainTitle]= useState(''); 
    const [introduce, setIntroduce] = useState(''); 
    const [mainPhoto, setMainPhoto] = useState('');
    const [orignalNameMainPhoto, setOrignalNameMainPhoto] = useState('');
    const [selectCategories, setSelectCategories]=useState([]);
    const [statusPost, setStatusPost]= useState('brouillon');


    const addNewArticle=(e)=>{ 
        e.preventDefault();
    const randomId = Math.floor(Math.random() * 1E9)  +'-' +Date.now(); 
      const newArticleAdded= {id: randomId, subTitle:'', writeParagraph:'', photoArticle:''}; 
      setFormNewArticleParagraph( [...formNewArticleParagraph, newArticleAdded])
    }


    const onChangeParagraph =(e, idParagraph)=>{ 
           let  name= e.target.name; 
           let value = e.target.value; 
  
           const paragraphsChange =formNewArticleParagraph.map(paragraph =>{ 
                     if(idParagraph === paragraph.id){
                        return {...paragraph, [name]:value}
                     }else{
                         return paragraph          
                            }       
           })
           setFormNewArticleParagraph(paragraphsChange)

    }
   
    const onRemoveParagraph =(e ,idParagraph )=>{ 
        const removeParagraph =formNewArticleParagraph.filter(paragraph => idParagraph !== paragraph.id)
          setFormNewArticleParagraph(removeParagraph)
    }

    const onChangeSelect = (selectedOption)=>{ 
        setSelectCategories(selectedOption);
    }


    const onChangeStatus =(e)=>{ 
        
        setStatusPost(e.target.value)
        
    }

    const onChangeImagePost= async(e, id=null)=>{
        e.preventDefault(); 
        const file = e.currentTarget.files[0]; 
        const fileName = Date.now() + file.name;
        const formData = new FormData();
        const name = e.target.name;
        console.log(name)
         try{
             if(file && name){ 
                formData.append('photoArticle',file, fileName );
                await fetch('http://localhost:5000/api/posts/upload', {
                    method:'POST', 
                    body: formData, 
                }).then(response => response.json())
                .then(data =>data).catch(err => console.log(err));

                if(name ==='file'){ 
                    setMainPhoto(fileName)
                    setOrignalNameMainPhoto(fileName);
                }else{ 
                    const paragraphsChange =formNewArticleParagraph.map(paragraph =>{ 
                        if(id === paragraph.id){
                            console.log(id)
                           return {...paragraph, photoArticle:fileName}
                        }else{
                            return paragraph          
                               }       
              })
              setFormNewArticleParagraph(paragraphsChange)
                }
             }
       
         }catch(err){
             console.log(err)
         }
        
    }
    console.log(formNewArticleParagraph, mainPhoto)
    const onSubmitFormPost=async(e)=>{ 

          e.preventDefault();
       const newPost={ 
            title:mainTitle, 
            introduce: introduce, 
            categories: selectCategories,
            status: statusPost,
            content: formNewArticleParagraph,
            photoPost: mainPhoto,
            firstName: currentUser?.firstName, 
            lastName: currentUser?.lastName,
            photoProfil: currentUser?.photoProfil

        }
         fetch('http://localhost:5000/api/posts', { 
                method:'POST',
                body: JSON.stringify(newPost), 
                headers:{
                "Content-type": "application/json; charset=UTF-8",
                } 
         }).then(response =>response.json())
         .then(data=> console.log(data)).catch(err => console.log(err));
         restart();

    }
    const restart = ()=>{
     setFormNewArticleParagraph([{id:'1637680817325-803515986', subTitle:'', writeParagraph:'', photoArticle:''}]); 
       setMainTitle(''); 
        setIntroduce(''); 
        setMainPhoto('');
         setSelectCategories([]);
        setStatusPost('brouillon');
    }
    return(<WriteNewArticleContainer>
                   <form   onSubmit={onSubmitFormPost} encType='multipart/form-data'>
                       <div className='container-main-title'>
                           <div>
                           <AddFile onChange={onChangeImagePost} name='file'/>
                           </div>
                           <InputPost className='main-title' name='mainTitle'value={mainTitle} onChange={(e)=>setMainTitle(e.target.value)} placeholder='titre' name='title'/>
                       </div>
                       <div>
                           <Textarea className='introduce' name='introduce' value={introduce} onChange={ (e)=>setIntroduce(e.target.value)} width='250px' placeholder='introduction'/>
                       </div>

                       <div>
                          {formNewArticleParagraph.map(paragraph=>{ 
                              return <Paragraph key={paragraph.id} onRemoveParagraph ={onRemoveParagraph}onChangeImagePost={onChangeImagePost} onChangeParagraph={onChangeParagraph} paragraph={paragraph}/>
                          })} 
                       </div>
                       <button type='button' className='btn-add-paragraph' onClick={addNewArticle}> Ajouter un nouveau paragraphe</button>
                       <div className='container-categories-status-post'>
                       <div className='select-categories'>      
                <label htmlFor='categories'>categories de l'article</label>
                   <Select 
                    className='select'
                    onChange={onChangeSelect}
                    components={animatedComponents}
                   isMulti
                   options={options}
                   />   
             </div>

             <div className='status-post'>
                <label htmlFor='categories'>Status</label>
                    <div>
                        <InputPost type='radio' id='draft' value='brouillon' name='status'  checked={ statusPost==='brouillon' ? true :false}onChange={(e)=>onChangeStatus(e)}/>
                        <label htmlFor='draft'> brouillon</label>
                    </div>
                    <div>
                        <InputPost type='radio' id='complet' value='complet' name='status' checked={ statusPost==='complet'? true :false} onChange={(e)=>onChangeStatus(e)} />
                        <label htmlFor='draft'>complet </label>
                    </div>
                </div>
                       </div>
                      
                
                <Button type='submit' className='btn-submit-post'>Enregistrer l'article</Button>
                   </form>
    </WriteNewArticleContainer>)
}

const WriteNewArticleContainer= styled.div`
      
                   height:100%; 
                   border:1px solid rgba(0,0,0,0.4);
                   border-radius: 10px;
                   width: 300px;
                    margin-top: 100px;
                    position: absolute;
                    margin-left:15px;
              .container-main-title{ 
                       display: flex;
                       
              }
            button.btn-add-paragraph{ 
                outline: none; 
                border-radius: 10px;
                padding: 10px;
                border:1px solid rgba(0,0,0,0.3);
                 background: none;
                 margin: 50px  0px 20px 30px;
                 cursor:pointer;
                 transition: all 0.2s linear;
            }
           button.btn-add-paragraph:hover{ 
              background-color: #1E2139 ;
              color: #fff;
            }

            select[multiple] {
                background:none;
                width:auto;
                height:auto;
                padding:0;
                margin:10;
                border-width: 2px;
                border-style: inset;
                -moz-appearance: menulist;
                -webkit-appearance: menulist;
                appearance: menulist;
              }
           .select-categories{ 
                  margin: 0 15px;
           }
           .select-categories label{ 
               margin-bottom:15px; 
               margin-left:10px;
           }
           .select{
               margin-top: 15px;
           }
           .status-post{ 
               margin-top: 25px;
               margin-left: 25px;
           }
        @media only screen and (min-width: 375px){ 
            width:350px;

            button.btn-add-paragraph{ 
                margin-left: 50px;
                
            }
        }

        @media only screen and (min-width: 425px){ 
            width:400px;

            button.btn-add-paragraph{ 
                margin-left: 60px;
                width: 300px;
                
            }
        }
        @media only screen and (min-width: 425px){ 
            width:400px;

            button.btn-add-paragraph{ 
                margin-left: 60px;
                width: 300px;
                
            }
        }
        @media only screen and (min-width: 768px){ 
            width: 725px;
            height: 1000px;

            button.btn-add-paragraph{ 
              width: 600px;
            }
        }
        @media only screen and (min-width: 850px){ 
            width: 825px;
            .container-categories-status-post{ 
                display: flex;
                justify-content: space-around;
            }
            .select{ 
                width: 600px;
            }
        }

        @media only screen and (min-width: 950px){ 
            width: 900px;
            .container-categories-status-post{ 
                display: flex;
                justify-content: space-around;
            }
            .select{ 
                width: 600px;
            }
        }

        @media only screen and (min-width: 1024px){ 
            width: 800px;
           margin-left:20%;
            .container-categories-status-post{ 
                display: flex;
                justify-content: space-around;
            }
            .select{ 
                width: 600px;
            }
        }
        @media only screen and (min-width: 1200px){ 
            width: 950px;
           margin-left:20%;
            .select{ 
                width: 600px;
            }
        }

`;
export default WriteNewArticle;