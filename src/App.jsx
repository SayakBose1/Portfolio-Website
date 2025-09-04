
import { Box } from '@chakra-ui/react'
import './App.css'
import Layout from './Components/Layout'
import About from './Pages/About.jsx'
import Skills from './Pages/Skills.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'



const router= createBrowserRouter([
  {
    path: "/",
    element: <About/>,
  },
  {
    path: "/skills",
    element: <Skills/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
])

function App() {
 

  return (
    <>
    <RouterProvider router={router}/> 
    </>
  )
}

export default App
