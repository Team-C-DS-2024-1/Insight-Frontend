import TestComponent from './components/TestComponent'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/uwu" element={<TestComponent name={"Sebastian"} mood={"Happy"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
