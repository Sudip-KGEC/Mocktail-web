import React, { useRef, useState } from 'react'
import { sliderLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Menu = () => {

  const contentRef = useRef()

   const [currntIndex , setCurrentIndex] = useState(0)


  useGSAP(()=>{
   
    gsap.fromTo('#title', 
      {
        opacity: 0,
        xPercent:20
      },
      {
          opacity:1,
          xPercent:0,
          duration: 1,
          ease:'sine.in'
      }
    )

    gsap.fromTo('.cocktail img' , 
      {
        opacity:0,
        xPercent:-100
      }
      ,
      {
        opacity:1,
        xPercent:0,
        duration: 1.2,
        ease: 'power1.inOut'
      }
    )

    gsap.fromTo('.details h2 , .details p' , 
      {
        opacity:0,
        yPercent:100
      }
      ,
      {
        opacity:1,
        yPercent:0,
        duration:1.3,
        ease:'expo.in'
      }
    )

  }, [currntIndex])





   const totalSliderLists = sliderLists.length

  const handleTabsSlider = (idx) => {

    const newidx = (idx + totalSliderLists) % totalSliderLists;

     setCurrentIndex(newidx)
  
  }

  const getCurrCocktail = (index)=> {
return sliderLists[(currntIndex + index + totalSliderLists) % totalSliderLists]
  }

  const currCocktail = getCurrCocktail(0)
  const prevCocktail = getCurrCocktail(-1)
  const nextCocktail = getCurrCocktail(1)








   
  return (
   <section  id='menu' aria-labelledby='menu-heading'  >
    <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf' />
    <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf' />

    <h2 id='menu-heading' className='sr-only'> Cocktail Menu</h2>
   
   <nav className='cocktail-tabs' aria-label='cocktail nav'>

    {sliderLists.map(({id, name}, idx) => {
        const isActive = idx === currntIndex

        return (
            <button
            onClick={() => handleTabsSlider(idx)}
             key={id}
             className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
             
             >{name}</button>
        )
    })}

   </nav>

   <div className="content">
      <div className="arrows">
        <button className='text-left' onClick={() => handleTabsSlider(currntIndex - 1)}>
           <span>{prevCocktail.name}</span>
           <img src="/images/right-arrow.png" alt="" />
        </button>

        <button className='text-right' onClick={() => handleTabsSlider(currntIndex + 1)}>
           <span>{nextCocktail.name}</span>
           <img src="/images/left-arrow.png" alt="" />
        </button>
      </div>

      <div className="cocktail">
        <img src={currCocktail.image} alt="cocktail-img" />
      </div>


      <div className='recipe'>
         <div className="info" ref={contentRef}>
          <p>Recipe for : </p>
          <p id='title'>{currCocktail.name}</p>
         </div>

         <div className='details'>
          <h2>{currCocktail.title}</h2>
          <p>{currCocktail.description}</p>
         </div>
      </div>
   </div>

   </section>
  )
}

export default Menu