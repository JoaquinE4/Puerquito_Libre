import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import DelaitProducts from './pages/DelaitProducts.jsx'
import { AuthProvider } from './context/AuthContex.jsx'
import Banner from './components/Banner.jsx'

export default function App() {
  return (
    <AuthProvider>


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registro' element={<Register/>}/>
        <Route path='/detalle' element={<DelaitProducts/>}/>

      </Routes>
      <Banner/>
    </BrowserRouter>
    </AuthProvider>
  )
}
