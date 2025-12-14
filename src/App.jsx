import React from 'react'
import { ScrollTrigger , SplitText } from 'gsap/all'
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Mocktails from './sections/Mocktails';

gsap.registerPlugin(ScrollTrigger , SplitText); 

const App = () => {
  return (
  <main>
    <Navbar/>
    <Hero/>
 
    <Mocktails/>
       <div ></div>
  </main>
  )
}

export default App