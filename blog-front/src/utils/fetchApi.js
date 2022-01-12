

/* export const fetchApi = async(route, methode=null, data=null)=>{ 

                const paramsFetch =  {
                    methode:body ? methode: 'GET', 
                    headers:{
                        "Content-type": "application/json; charset=UTF-8",
                        } 
                }

                 if (methode !=='GET'){ 
                     paramsFetch.body = JSON.stringify(data);
                 }
            try{

                const response  = await  fetch(`http://localhost:5000/api${route}`,paramsFetch)
                 if(response.ok){
                    const data = await response.json(); 
                     return data;
                 }

            }catch(err){ 
              console.log(err);
            }
}*/