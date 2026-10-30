import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import TourDetails from "./pages/TourDetails"
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'


function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, [pathname, search]);

  return null;
}

function HomePages() {
  

  return (
    <>
    <main className="relative min-h-screen overflow-hidden">
      <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
            alt="Beautiful mountain landscape" className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-black/45"/>
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </main>
    <Destinations/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

function App() {
  

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/tour" element={<TourDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App