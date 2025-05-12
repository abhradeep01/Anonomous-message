import PWABadge from './PWABadge.jsx'
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './components/layouts/Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Home/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <PWABadge />
    </>
  )
}

export default App
