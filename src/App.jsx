import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Page1 from './components/Page1'
import Love from './components/Love'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Page1/>}></Route>
          <Route path='/love' element={<Love/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
