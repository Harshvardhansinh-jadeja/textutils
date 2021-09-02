import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('')

    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase" , "success")
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase" , "success")

    }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied Text" , "success")

    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared Text" , "success")

    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Cleared Extra Space" , "success")

    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
        
    }

    return (
        <>
        <div className="container" style={{color : props.mode === 'dark' ? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor :props.mode === 'light' ?'white' : '#263b5a',color : props.mode === 'dark' ? 'white':'black' }} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase </button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase </button>
            <button className="btn btn-danger mx-3" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-secondary mx-3" onClick={handleExtraSpace}>Clear Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color : props.mode === 'dark' ? 'white':'black'}}>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>You can read this article in {0.08 * text.split(" ").length} minutes </p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : 'Enter Text to Preview'}</p>
        </div>
        </>
    )
}
