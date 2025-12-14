import { useGSAP } from '@gsap/react'
import { SplitText , ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import React, { useRef } from 'react'
import  { useMediaQuery } from 'react-responsive'

const Hero = () => {


  const videoRef = useRef()

  const isMobile = useMediaQuery({maxWidth: 767})

  useGSAP(()=>{
    const heroSpilit = new SplitText('.title' , {type : 'chars, words'})
    const paraSpilit = new SplitText('.subtitle' , {type : 'lines'});

    heroSpilit.chars.forEach((char) => {
        char.classList.add('text-gradient')
    })

    gsap.from(heroSpilit.chars , {
      yPercent : 100,
      duration: 1.9,
      ease: "expo.out",
      stagger: 0.08,
    });

      gsap.from('.tag' , {
      xPercent:100,
      opacity:0,
      duration:1,
      ease: 'power1.inOut',
      delay:0.4
    })

    gsap.from(paraSpilit.lines , {
      yPercent:100,
      opacity:0,
      duration:1.8,
      ease: 'expo.out',
      stagger: 0.08,
      delay:0.6
    })
 gsap.from('.btn' , {
      yPercent:100,
      opacity:0,
      duration:1,
      ease: 'power1.inout',
      delay:1.2
    })


    gsap.timeline({
      scrollTrigger : {
            trigger : '#hero',
            start: 'top top',
            end : 'bottom top',
            scrub : true // smoothScroll
      }
    })
    .to('.left-leaf' , {y:-200} , 0)
    .to('.right-leaf' , {y:200} , 0)

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top":"bottom top"


   const tl = gsap.timeline({
      scrollTrigger:{
        trigger : 'video',
        start : startValue,
        end: endValue,
        scrub: true,
        pin: true
      }
    })


    videoRef.current.onloadedmetadata = () => {
       tl.to(videoRef.current , {
           currentTime: videoRef.current.duration
       })
    }
  } , [])



  return (
    <>
   
    <section id='hero' className='noisy'>
      <h1 className='title uppercase'>mojito</h1>
      <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf md:h-[30vw]'/>
      <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf md:h-[30vw]'/>

      <div className='body'>
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p className='tag'>Cool. Crisp. Classic. </p>
            <p className="subtitle">
              Sip the Spirit <br />
              of Summer 
            </p>
          </div>
          <div className='view-mocktails'>
              <p className="subtitle">
                Every mocktail on our menu is blend of premium ingredients, creative flair,
                and timeless recipes - designed to delight your sences. 
              </p>
              <a href="#mocktails" className='btn'>
                View Mocktails
              </a>
          </div>
        </div>
       </div>
      </section>

      <div className='video inset-0 absolute'>
          <video 
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload='auto'
          />
      </div>

     </>
  )
}

export default Hero