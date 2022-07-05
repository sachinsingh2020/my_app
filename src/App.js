import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const body = document.body;
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      body.style.backgroundColor = "#1c289a";
      showAlert("Dark Mode Enabled", "success");
      document.title = "Home-Dark Mode";

      // setInterval(() => {
      //   document.title = "Dark Mode is Amazing";
      // }, 500);

      // setInterval(() => {
      //   document.title = "Download it Now";
      // }, 1000);
    }
    else {
      setMode("light");
      body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "Home-Light Mode";
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mt-3">
          <Routes>
            <Route exact path="/about" element={<About />}> </Route>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />}></Route>
          </Routes>
        </div>
      </Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container mt-3">
        <Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />
      </div>
    </>
  );
}


export default App;
