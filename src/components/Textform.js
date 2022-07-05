import React, { useState } from 'react'

export default function Textform(props) {

    const clearOnClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared", "success");
    }
    const handleUpClick = () => {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleOnChange = (e) => {
        // console.log("On Change");
        setText(e.target.value);
    }

    const copyText = () => {
        // console.log("I am copy");
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied To Clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Cleared", "success");
    }
    const [text, setText] = useState("");
    return (
        <main>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className={`form-label fw-bold text-${props.mode === "light" ? "black" : "white"} `}>{props.heading}</label>
                <textarea className={`form-control`} style={{ backgroundColor: props.mode === "light" ? "white" : "#504545", color: props.mode === "light" ? "black" : "white" }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-danger" onClick={handleUpClick}>lowercase to uppercase</button>
            <button className="btn btn-success" onClick={handleLoClick}>uppercase to lowercase</button>
            <button className="btn btn-warning" onClick={clearOnClick}>clear</button>
            <button className="btn btn-dark" onClick={copyText}>Copy Text</button>
            <button className="btn btn-secondary" onClick={handleExtraSpaces}>Remove Extra Space</button>

            <div className={`container my-3 text-${props.mode === "light" ? "black" : "white"}`}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{.008 * (text.split(" ").length - 1)} minutes to read</p>
                <h2>Preview</h2>

                <p>{text.length > 1 ? text : "write something to preview"}</p>
            </div>
        </main>
    )
}
