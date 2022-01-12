import React, {useState, useEffect} from 'react'; 
import { Input, InputPost } from '../../UI/Input';
import styled from 'styled-components';
import Textarea from '../../UI/Textarea';
import {ParagraphEdit} from '../Paragraph';
import AddFile from '../../UI/AddFile';
import Button from '../../UI/Button';
import { useAuth } from '../../context/AuthContext';
import {fetchApi} from '../../utils/fetchApi';
import { useNavigate, useParams} from 'react-router-dom';
import Select from 'react-select';
import { options } from '../../utils/optionsSelect';
import makeAnimated from 'react-select/animated';
import { categoriesColor } from '../../utils/optionsColor';

const animatedComponents = makeAnimated();
const EditPost=()=>{ 

        const {currentUser}= useAuth();
       const [post, setPost]= useState({}); 
       const navigate = useNavigate(); 
       const {id} = useParams(); 

       useEffect(()=>{ 
        function fetchPosts(){
            const request = 'http://localhost:5000/api/posts/'+id;
              try{ 
                fetch(request).then(response => response.json())
                .then(data => setPost(data) )
                
              }catch(err){ 
                  console.log(err)
              }     
           }
           fetchPosts();
       },[id])

console.log(post)
    const onChangeEditParagraph =(e, idParagraph)=>{ 
           let  name= e.target.name; 
           let value = e.target.value; 
          const {content} = post;
             if(content){
                const paragraphsEditChange =content.map(paragraph =>{ 
                    if(idParagraph === paragraph.id){
                       return {...paragraph, [name]:value}
                    }else{
                        return paragraph          
                           }       
          })
          setPost({...post, content:paragraphsEditChange })
             }
           

    }
    const onChangeEditPost =(e)=>{ 
        let  name= e.target.name; 
        let value = e.target.value; 
       setPost({...post, [name]: value})
 }

    const onRemoveParagraph =(e ,idParagraph )=>{ 
        const {content} = post
        const removeParagraph =content.filter(paragraph => idParagraph !== paragraph.id)
          setPost({...post, content: removeParagraph})
    }

    const onChangeSelect = (selectedOptions)=>{ 
         /*  const valueSelected = []; 
        for(let i = 0; i <selectedOptions.length; i++){      
                    valueSelected.push(selectedOptions[i].value)
        }*/
        setPost({...post, categories: selectedOptions})
    }

    console.log(post.categories);


    
    const onChangeImagePost= async(e, id=null)=>{
        e.preventDefault(); 
        const file = e.target.files[0]; 
        const fileName = Date.now() + file.name 
        const formData = new FormData();
        const name = e.currentTarget.name;
         try{
             if(file && name){ 
                formData.append(name,file, fileName );
                await fetch('http://localhost:5000/api/posts/upload', {
                    method:'POST', 
                    body: formData, 
                }).then(response => response.json())
                .then(data =>data).catch(err => console.log(err));

                if(name ==='photoArticle'){ 
                    const{content } = post;
                    const paragraphsChangeImage =content.map(paragraph =>{ 
                        if(id === paragraph.id){
                           return {...paragraph, photoArticle:fileName}
                        }else{
                            return paragraph          
                               }       
              })
              setPost({...post, content: paragraphsChangeImage})
                }else{ 
                    setPost({...post, photoPost: fileName})
                }
             }
       
         }catch(err){
             console.log(err)
         }
        
    }
    const onSubmitEditPost=(e)=>{ 
        e.preventDefault();
        console.log('hello')
         fetch('http://localhost:5000/api/posts/'+post._id, { 
                method:'PUT',
                body: JSON.stringify(post), 
                headers:{
                "Content-type": "application/json; charset=UTF-8",
                } 
         }).then(response =>response.json())
         .then(data=> navigate(0)).catch(err => console.log(err))
    }
    return(<WriteNewArticleContainer>
                   <form onSubmit={onSubmitEditPost}   encType='multipart/form-data' >
                       <div className='container-main-title'>
                           <AddFile onChange={onChangeImagePost} name='file' />
                           <InputPost className='main-title' name='mainTitle' value={post.title} onChange={(e)=> onChangeEditPost(e)}  placeholder='titre' name='title'/>
                       </div>
                       <div>
                           <Textarea className='introduce' name='introduce' value={post.introduce} width='250px' onChange={(e)=>onChangeEditPost(e)} placeholder='introduction'/>
                       </div>

                        <div>
                        { post.content && post.content.map(paragraph=>{ 
                         return <ParagraphEdit key={paragraph.id} paragraph={paragraph} onChangeEditParagraph={onChangeEditParagraph}onRemoveParagraph={onRemoveParagraph} onChangeImagePost={onChangeImagePost}  />                    
                                
                          })} 
                       </div>
                       <div className='container-categories-status-post'>
                       <div className='select-categories'  >    
                <h6 htmlFor='categories'>categories de l'article</h6>   
                <ul className='categoriesValue'>
                    {post.categories?.map(post => <li key={post.value} style={{backgroundColor:categoriesColor[post.value]}}>{post.value}</li>)}
                </ul>  
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
                        <InputPost type='radio' id='draft' value='brouillon'checked={ post?.status==='brouillon' ? true :false} onChange={(e)=>onChangeEditPost(e)} name='status' />
                        <label htmlFor='draft'> brouillon</label>
                    </div>
                    <div>
                        <InputPost type='radio' id='complet' value='complet' checked={post?.status==='complet' ? true :false} onChange={(e)=>onChangeEditPost(e)} name='status'   />
                        <label htmlFor='draft'>complet </label>
                    </div>
                </div>
                </div>
                <Button type='submit' className='btn-put'>Modifier l'article</Button>
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
                 margin-top: 50px; 
                 margin-left: 30px;
                 cursor:pointer;
                 transition: all 0.2s linear;
            }
           button.btn-add-paragraph:hover{ 
              background-color: #1E2139 ;
              color: #fff;
            }

            .select {
              margin: 25px 15px;
              }
              h6{ 
                  margin: 25px;
              }
              .categoriesValue{ 
                  margin: 20px 35px;
              }
              .categoriesValue li{
                  list-style: none;
              }
              .categoriesValue li{
                color:#fff; 
                border-radius:15px; 
                text-align: center;
                margin-bottom: 25px; 
                 padding:8px;
            }
            .status-post{ 
                margin-left:25px;
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
                .categoriesValue{ 
                    display: flex;
                    
                }
                .categoriesValue li{ 
                    margin-left: 25px;
                    
                }
            }
            @media only screen and (min-width: 850px){ 
                width: 825px;
                .container-categories-status-post{ 
                    display: flex;
                    justify-content: space-around;
                }
                .status-post{ 
                    margin-top: 150px;
                    margin-left: 0;
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
            }
            @media only screen and (min-width: 1200px){ 
                width: 950px;
               margin-left:20%;
            }
`;
export default EditPost;