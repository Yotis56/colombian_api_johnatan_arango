import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './styles/App.css'
import { Layout } from './pages/Layout'
import { Entry } from './pages/Entry'

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route element={ <Layout />}>
      <Route path='/' element={ <Entry />} />
      <Route path='/colombia_dash' element={ <Home />} />
    </Route>
  ), 
  // { basename: "/colombian_api_johnatan_arango" }
)

export default App
