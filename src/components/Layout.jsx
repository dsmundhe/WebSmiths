import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Turnaments from './Turnaments'
import Profile from './Profile'
import Contact from './Contact';
import Registration from './Registration'
function Layout() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/turnaments' element={<Turnaments/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/registor' element={<Registration/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout
