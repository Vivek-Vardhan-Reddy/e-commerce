import React,{useState} from 'react'

export default function Textfield(){

    const [text,setText]=useState("Enter text");

    const handleOnClick = () =>{
        setText(eval(text))
        console.log("Clicked")
    }
    const handleOnChange = (e) =>{
        console.log("onChange")
        setText(e.target.value)
    }
    
    return (
        <>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} name="" id="" rows="3"></textarea>
        </div>
        <button onClick={handleOnClick}>Calculate</button>
        </>
    );
  }

