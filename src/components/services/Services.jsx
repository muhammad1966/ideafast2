import React from 'react'
import expert from '../../assets/exparts.jpg'
import colab from '../../assets/like-minded.jpg'
import help from '../../assets/help.jpg'

const Services = () => {
  return (
    <div className='bg-black flex py-8 px-10 font-man md:flex-1'>
      <div className='flex flex-col sm:flex-row gap-8 items-center justify-center'>
        <div className='flex-1 bg-footer cursor-pointer'>
          <img className='flex w-[100%] h-[50%]' src={expert} alt="expert" />
          <h3 className='font-man text-text_color text-xl font-bold text-center mt-2 mb-4'>Meet Thousands of Exparts</h3>
          <p className='text-gray-200 text-center mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet suscipit! Blanditiis error enim amet! Veniam magni quas impedit nisi.</p>
        </div>
        <div className='flex-1 bg-footer cursor-pointer'>
          <img className='flex w-[100%] h-[50%]' src={colab} alt="colab" />
          <h3 className='font-man text-text_color text-xl font-bold text-center mt-2 mb-4'>Collaborate with Like-minded People</h3>
          <p className='text-gray-200 text-center mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet suscipit! Blanditiis error enim amet! Veniam magni quas impedit nisi.</p>
        </div>
        <div className='flex-1 bg-footer cursor-pointer'>
          <img className='flex w-[100%] h-[50%]' src={help} alt="help" />
          <h3 className='font-man text-text_color text-xl font-bold text-center mt-2 mb-4'>Help and Inspire Others </h3>
          <p className='text-gray-200 text-center mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet suscipit! Blanditiis error enim amet! Veniam magni quas impedit nisi.</p>
        </div>
      </div>
    </div>
  )
}

export default Services