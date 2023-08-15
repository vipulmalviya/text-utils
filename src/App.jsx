import './App.css'
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import { useState, React } from 'react'
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  // const showalert = (message, type) => {
  //   setAlert({
  //     message: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert("")
  //   }, 1500);
  // }

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
        <Navbar logo="TextChanger" ln1="Home" ln2="About us" mode={mode} togglemode={togglemode} />
        <div className='container'>
        <Alert alert={alert} />
         <Textarea hedding="Enter the text to analyze below" showalert={showalert} alert={alert} mode={mode}/>
        </div>
    </>
  )
}

export default App
