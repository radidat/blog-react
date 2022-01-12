import React, {useLayoutEffect, useState} from 'react';

export const useWindowSize = ()=>{
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

    useLayoutEffect(()=>{
     
        const resizeWindow= ()=>{ 
            setSize([window.innerWidth, window.innerHeight])
        }
    
         window.addEventListener('resize', resizeWindow)
         return ()=>{
             window.removeEventListener('resize', resizeWindow)
         }
    },[])

    return size;
}