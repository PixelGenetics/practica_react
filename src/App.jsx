
import {useState} from 'react'
import Components from './components/Components'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cont,setCont] = useState(false)
  console.log(cont);
  return (
    <>
    
    <p>Hola {cont ? 'false' : 'true'}</p>
    
    <button onClick={() => setCont(!cont)}>Clic</button>
      
      <Components />

    </>
  )
}

export default App
