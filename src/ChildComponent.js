import {useState,useEffect,useContext} from 'react';
import { contextProvider } from './App';

export default function ChildComponent(naming) {

    const [name,setName]= useState([]);
    const {contextvalue}= useContext(contextProvider);
   
    useEffect(()=>{
        console.log(naming)
     setName(naming);
    },[naming]);
    

    
    return(
        <div>
            Child component  {contextvalue}
      <ul>
        {name && name.value &&  name.value.length > 0 && name.value.map(x=>(
            <li>
                {x}
            </li>
        ))}
      </ul>
      </div>
    );

}
 