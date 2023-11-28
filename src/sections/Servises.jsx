import React from 'react'
import { services } from '../constnts'
import ServiseCard from '../components/ServiseCard'

const Servises = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
        {services.map(service => (
          <ServiseCard key={service.label} {...service} />
        ))}
    </section>
  )
}

export default Servises