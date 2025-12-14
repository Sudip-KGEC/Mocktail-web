import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const About = () => {


useGSAP(() => {
    const spilitText = SplitText.create('#about h2' , {
        type:'words'
    });



    const timeline = gsap.timeline({
         scrollTrigger:{
            trigger: '#about',
            start: 'top center'
         }
    })


    timeline.from(spilitText.words , {
        opacity:0,
        duration:1,
        yPercent:100,
        stagger: 0.03,
        ease: 'expo.out'
    }).from('.top-grid div , .bottom-grid div',{
        opacity:0 , 
        duration:1,
        stagger:0.04,
        ease:'power1.inOut'
    }, '-=0.5')
},[])

  return (
    <div id='about'>
        <div className="mb-16 md:px-0 px-5">
            <div className="content">
                <div className="md:col-span-8">
                    <p className="badge">Best Cocktails</p>
                    <h2>
                        Where every detail matters <span className='text-white'>-</span> 
                        from muddle to gurnish
                        </h2>
                </div>

                <div className="sub-content">
                    <p>Every mocktail we serve is a reflection of our obeession with detail - from the first moddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                    <div>
                        <p className="md:text-3xl text-xl font-bold">
                             <span>4.7/5</span>
                             <p className='text-sm text-white-100'>More than +8000 customers</p>
                        </p>
            
                    </div>
                    
                </div>
              
                </div>
           
             
        </div>
         <div className='top-grid'>
                    <div className="md:col-span-3">
                        <div className="noisy">
                            <img src="/images/abt1.png" alt="grid-img1" />
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="noisy">
                            <img src="/images/abt2.png" alt="grid-img1" />
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <div className="noisy">
                            <img src="/images/abt4.png" alt="grid-img1" />
                        </div>
                    </div>
             </div>
             <div className="bottom-grid">
                          <div className="md:col-span-8">
                        <div className="noisy">
                            <img src="/images/abt3.png" alt="grid-img1" />
                        </div>
                    </div>
                    <div className="md:col-span-4">
                        <div className="noisy">
                            <img src="/images/abt5.png" alt="grid-img1" />
                        </div>
                    </div>
                    </div>
        
    </div>
  )
}

export default About