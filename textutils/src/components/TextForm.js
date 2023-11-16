import React,{useState, useEffect} from 'react'
// import {Text, StyleSheet} from 'react-native';





export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        console.log(text.toUpperCase())
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase !", "success")
    }

    const handleCopy=()=>{
      console.log("I AM COPY")
      var text=document.getElementById("myBox")
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text Copied !", "success")
    }

    const removeExtraSpace=()=>{
      let ntxt= text.split(/[  ]+/);
      setText(ntxt.join(" "))
      props.showAlert("Extra Spaces Removed", "success")
    }

    const handleLoClick=()=>{
      console.log(text.toLowerCase());
      let newtext1= text.toLowerCase();
      setText(newtext1)
      props.showAlert("Converted to Lowercase", "success")
    }
    const handleClear=()=>{
      console.log("CLEAR TEXT");
      let newtext1= " ";
      setText(newtext1)
      props.showAlert("Text Cleared! ", "success")
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    

    const [text, setText]=useState('');
    useEffect(()=>{
        setText("")
	}, [])
   
    

  return (
    <>
<div className="container" style={{color:props.mode==='dark'?'light':'dark'}}>
  
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2 " onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
    { <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button> }
    {<button className="btn btn-primary mx-2" onClick={removeExtraSpace} >Remove Extra Space</button>}
    {<button className="btn btn-primary" onClick={handleClear} >Clear Text</button> } 
</div>
<div className="container" my-3  >
  <h1>Your text summary</h1>
  { <p>{(text.split(" ").length)-1} words, {text.length} characters</p> }
 
  <p>{0.008 * text.split(" ").length} Minutes Read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Enter something to preview here"}</p>
</div>
</>
  )
}
