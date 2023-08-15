import './App.css'
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
import { useState, React } from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showalert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert("")
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      showalert('enable to dark mode', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert('enable to light mode', 'success')
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar logo="TextChanger" ln1="Home" ln2="About us" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className='container'>
        {/* <Routes> */}
          {/* <Route path="/"element={<Textarea hedding="Enter the text to analyze below" showalert={showalert} alert={alert} mode={mode}/>}/> */}
          {/* <Route path="about"element={<About  hedding="About Us" mode={mode} />}/> */}
         {/* </Routes> */}
         <Textarea hedding="Enter the text to analyze below" showalert={showalert} alert={alert} mode={mode}/>
        </div>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
