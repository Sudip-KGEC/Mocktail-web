import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'

const Mocktails = () => {
  return (

   <section id='mocktails' className='noisy'>

     <div className='list'>
        <div className='popular'>
            <h2>Most Popular Cocktails : </h2>

            <ul>
                {cocktailLists.map(({name ,  country , detail , price }) =>(
                    <li key={name}>
                    
                      <div className='md:me-28'>
                            <h3>{name}</h3>
                            <p>{country} | {detail}</p>
                      </div>
                      <span>{price}</span>
                    </li>
                   
                ))}
            </ul>
        </div>

        <div className='loved'>
            <h2>Most loves Mocktails : </h2>

            <ul>
                {mockTailLists.map(({name ,  country , detail , price }) =>(
                    <li key={name}>
                    
                      <div className='me-28'>
                            <h3>{name}</h3>
                            <p>{country} | {detail}</p>
                      </div>
                      <span>{price}</span>
                    </li>
                   
                ))}
            </ul>
        </div>
     </div>
 
   </section>
  
   
  )
}

export default Mocktails