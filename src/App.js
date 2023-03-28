import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Loader from './components/Loader'
import Proyects from './components/Proyects'
import Contact from './components/Contact'
import { useState } from 'react'

const App = ()=> {
  const [state, setState] = useState(true)
  
  const componentsRender = ()=> {
    setTimeout(()=> {
      setState(false)
    }, 3000)
  }

  componentsRender()

  if (state) {
    return (
      <Loader/>
    )
  } else {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Proyects/>
        <Contact/>
      </div>
    )
  }
}

export default App;
