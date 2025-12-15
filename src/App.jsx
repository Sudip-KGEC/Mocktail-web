import React from 'react'
import { ScrollTrigger , SplitText } from 'gsap/all'
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Mocktails from './sections/Mocktails';
import About from './sections/About';
import Art from './sections/Art';
import Menu from './sections/Menu';
import Contact from './sections/Contact';

gsap.registerPlugin(ScrollTrigger , SplitText); 

const App = () => {
  return (
  <main>
    <Navbar/>
    <Hero/>
    <Mocktails/>
    <About/>
    <Art/>
    <Menu/>
    <Contact/>
  </main>
  )
}

export default App