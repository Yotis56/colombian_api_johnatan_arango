import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './styles/App.css'

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={Home} />
  )
)

export default App
