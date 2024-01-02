import React from 'react'
import light from '../../assets/light2.png'

const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col bg-black font-man mb-auto md:pt-20 pt-10 items-center justify-start'>
      <div className='flex flex-1 flex-col px-10 pb-5'>
        <h1 className='md:text-6xl md:leading-big leading-small text-4xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-background to-text_color '>
          Share your crazy ideas with like-minded people across the globe.
        </h1>
        <p className='text-text_color mt-10 font-man text-xl leading-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat placeat modi sed excepturi, asperiores officia eos ipsa quo quos nesciunt? Recusandae quaerat perspiciatis optio aut mollitia alias nisi fugit enim.</p>
        <h4 className='text-gray-500 mt-4 cursor-pointer'>Click here to get started</h4>
      </div>
      <div className='flex flex-1 justify-center relative md:hover:after:flex sm:hover:after:hidden items-center before:content-[""] before:absolute before:bg-text_color before:h-[13px] before:w-[37px] before:shadow-low_glow before:blur-[4em] md:before:hidden lg:before:top-56  after:content-[""] after:absolute after:bg-text_color after:h-[13px] after:w-[37px] after:shadow-glow after:blur-[3em] after:top-56 after:hidden '>
        <img className='w-[55%] h-[100%]' src={light} alt="" />
      </div>
    </div>
  )
}

export default Header