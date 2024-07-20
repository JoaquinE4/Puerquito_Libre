import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import DelaitProducts from './pages/DelaitProducts.jsx'
import { AuthProvider } from './context/AuthContex.jsx'
import Banner from './components/Banner.jsx'
import Shop from './pages/Shop.jsx'
import Footer from './components/Footer.jsx'
import Historial from './pages/Historial.jsx'
import Supermercado from './pages/Supermercado.jsx'
import LoginPage from './pages/LoginPage.jsx'

export default function App() {
  return (
    <AuthProvider>


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registro' element={<Register/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/detalle' element={<DelaitProducts/>}/>
        <Route path='/ofertas' element={<Shop/>}/>
        <Route path='/historial' element={<Historial/>}/>
        <Route path='/supermercado' element={<Supermercado/>}/>

      </Routes>
      <Banner/>
    </BrowserRouter>
    </AuthProvider>
  )
}
