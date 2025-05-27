import React from 'react'

import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'


export const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-red-50 via-violet-50 to-indigo-50'>
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}
