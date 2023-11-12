import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import AppBar from './components/AppBar'

function App() {
  return (
  <BrowserRouter>
  <AppBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
