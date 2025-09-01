import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
 import ChildComponent from './ChildComponent';
 import { createContext } from 'react';
 
 export const contextProvider =createContext();

function App() {
 const [name,setName]=useState([]);
  const val=["Dublin","Dubai","India","Dublin"];

  



  const onChangeHandler =(e) =>{
     var result= val.filter(x=>x.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase()));
     setName(result);
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}

      <contextProvider.Provider  value={"SAthya"}>
      <input  type="text" val={name} placeholder="something to type" onChange={(e)=>onChangeHandler(e)} />
      <ul>
        {name && name.map(x=>
        (
          <li>
          {x}
          </li>
        ))}
      </ul>

      <div>
        {<ChildComponent value={name}   />}

       
      </div>
      </contextProvider.Provider>
    </div>
  );
}

export default App;
