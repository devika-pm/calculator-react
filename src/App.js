import { useState } from 'react';
import './App.css';

function App() {
  const [result,setResult] = useState("")
 
  const handleClick =(e)=>{
    setResult(result.concat(e.target.name))
  }
  //console.log(result)
  const clear = ()=>{
    setResult("");
  }
  const backspace =()=>{
    setResult(result.slice(0,result.length-1));

  }
  const sum =()=>{
    try{
      setResult(eval(result).toString())
    }
    catch(err){
      setResult('error')
    }
    
  }
  
  return (
    <div className="calculator-grid border-rounded shadow">
      <div className='output' value={result}>
        <input
         style={{backgroundColor:' rgb(65, 63, 63)',fontSize:'40px',color:'white',
         width:'350px',height:'100%',textAlign:'right',letterSpacing:'2px'}} type='text' value={result}/>
        

      </div>
      <button  onClick={clear} id='clear' style={{backgroundColor:'#a1ffff'}}  className='span-two'>AC</button>
      <button  onClick={backspace} id='backspace'style={{backgroundColor:'#a1ffff'}} >DEL</button>
      <button onClick={handleClick} name="/"  >/</button>
      <button onClick={handleClick} name="1">1</button>
      <button onClick={handleClick} name="2">2</button>
      <button onClick={handleClick} name="3">3</button>
      <button onClick={handleClick} name="*" >*</button>
      <button onClick={handleClick} name="4">4</button>
      <button onClick={handleClick} name="5">5</button>
      <button onClick={handleClick} name="6">6</button>
      <button onClick={handleClick} name="+" >+</button>
      <button onClick={handleClick} name="7">7</button>
      <button onClick={handleClick} name="8">8</button>
      <button onClick={handleClick} name="9">9</button>
      <button onClick={handleClick} name="-" >-</button>
      <button onClick={handleClick} name="." >.</button>
      <button onClick={handleClick} name="0">0</button>
      <button onClick={sum}  className='span-two' style={{backgroundColor:'#a1ffff'}}>=</button>

     
    </div>
  );
}

export default App;
