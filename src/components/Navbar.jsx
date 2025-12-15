import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
useGSAP(() => {

  const navTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: "nav",         
      start: "bottom top"      
    }
  });

  navTimeLine.fromTo(
    "nav",
    {
      backgroundColor: "transparent",
    },
    {
      backgroundColor: "#000000/50",
      backdropFilter: "blur(8px)",
      duration: 0.4,
      ease: "power1.out"
    }
  );



}, []);


  return (
    <nav>
        <div >
            <a className='flex items-center gap-2' href="#hero">
                <img src="/images/logo.png" alt="logo" />
                <p className='text-3xl font-bold tracking-wider text-gradient uppercase'>Mocktail Zilla</p>
            </a>

            <ul className=' flex-center'>
                {navLinks.map((link) => (
                    <li className='' key={link.id}>
                        <a className=' text-zinc-400 hover:text-white' href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar