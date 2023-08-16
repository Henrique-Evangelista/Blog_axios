import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    
      <div className='app'>
        <Navbar/>
        <div className="container">
          <Outlet/>
        </div>
        </div>
        )}

export default App
