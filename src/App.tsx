import { useState, useEffect } from 'react'
import './App.css'
import ListProjects from './components/ListProjects'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [userProjects, setUserProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects").then((response) => {
      return response.json()
    }).then(response => setUserProjects(response)).catch(error => console.log(error))
  }, [])


  return (
    <>
      {/* <h1>HI</h */}
      <BrowserRouter>
        <Routes>
          <Route path='/list-projects' element={<ListProjects />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
