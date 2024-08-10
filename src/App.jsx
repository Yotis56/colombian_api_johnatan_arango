import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={Home} />
  )
)

export default App
