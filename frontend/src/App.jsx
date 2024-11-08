import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Navbar from './Componetens/Navbar';
import Hero from './Componetens/Hero';
import WorkoutSessions from './Componetens/WorkoutSessions';
import Gallery from './Componetens/Gallery';
import Pricing from './Componetens/pricing';
import Contact from './Componetens/Contact';
import BMICalculator from './Componetens/BMICalculator';
import Footer from './Componetens/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme='dark' position='top-center' />
    </Router>
  )
}

export default App
