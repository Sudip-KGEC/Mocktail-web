import React from 'react'
import { featureLists, goodLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'

const Art = () => {
 
    const isMobile = useMediaQuery({maxWidth: 768})

useGSAP(() => {

    const start = isMobile ? "top 30%" : "top -15%" ;

    const mastTimeline = gsap.timeline({
        scrollTrigger : {
            trigger: '#art',
            start : start,
            end: 'bottom center',
            scrub: 1.5,
            pin: true
        }
    })


    mastTimeline
    .to('.will-fade' , {
        opacity:0,
        stagger:0.03,
        ease:"power1.inOut",
    })
    .to(".masked-img" , {
            scale:1.2,
            maskPosition:"center",
            maskSize: "300%",
            duration: 1,
            ease: "power1.inOut"
    })
    .to("#masked-content" , {
        opacity:1,
        duration:1,
        ease:"power1.inOut"
    })
})


  return (
    <div id='art'>
        <div className='pt-20 h-full mx-auto container'>
            <h2 className='uppercase will-fade'>The Art</h2>
            <div className='content'>
                <ul className="space-y-4 will-fade">
                    {goodLists.map((list , idx) => (
                        <li key={idx} className='flex items-center gap-2'>
                            <img src="/images/check.png" alt="check" />
                            <p>{list}</p>
                        </li>
                    ))}
                </ul>
                <div className="cocktail-img">
                    <img src="/images/under-img.jpg" alt="under-img" 
                    className='abs-center masked-img size-full object-contain'
                    />
                </div>

               <ul className="space-y-4 will-fade">
                   {featureLists.map((feature , idx) => (
                    
                   <li key={idx} className='flex items-center gap-2 justify-start'>
                    <img src="/images/check.png" alt="check" />
                    <p className='m:w-fit w-60'>{feature}</p>
                   </li>
                   ))}
                </ul>
            </div>

            <div className='masked-container'>
                <h2 className='will-fade'>Sip-worthy perfection</h2>
                <div id='masked-content'>
                    <h3>Made with Craft, Poured with passion </h3>
                    <p>This isn't just a drink. It's a carefully crafted moment mode justfor you.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Art