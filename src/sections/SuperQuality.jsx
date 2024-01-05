import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
        <div className='flex flex-1 flex-col'>
          <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            We Provide You <span className='text-coral-red inline-block mt-3'>Super</span>
            <span className='text-coral-red inline-block mt-3'>Qualiti</span> Shoes
          </h2>
          <p className='mt-4 lg:max-w-lg info-text '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit corporis eum repudiandae! Ex, ipsa.</p>
            <p className='mt-6 lg:max-w-lg infor-text'>Our Dedication to Detail and exellence ensures your Satisfactiomn</p>      
          <div className='mt-11  '>
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More" backgroundColor='bg-white' borderColor="border-slate-gray" textColor="text-slate-gray"/>

          </div>
        </div>

        <div className='flex-1 flex justify-center items-center '>
          <img src={shoe8} alt="shoe8" width={570} height={522} className='object-contain' />
        </div>
    </section>
  )
}

export default SuperQuality