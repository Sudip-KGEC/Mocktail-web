import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger,  } from 'gsap/all'
import gsap from 'gsap'

const Navbar = () => {

useGSAP(()=>{

const navTimeLine = gsap.timeline(
    {
        ScrollTrigger :{
            trigger: 'nav',
            start: 'bottom top'
        }
    }
) 

navTimeLine.fromTo('nav' , 
    {
        backgroundColor: 'transparent'
    } , 
    {
        backgroundColor:'#000000050',
        backgroundFilter: 'blur(10px)',
        duration:1,
        ease: 'power1.inOut'
    }
)

} , [])

  return (
    <nav>
        <div className=''>
            <a className='flex items-center gap-2' href="#home">
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