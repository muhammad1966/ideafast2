import React from 'react'
import llinks from '../../LinkFoot'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'



const List = () =>{
  return(
    <>
      <div>
        <ul>
            <li className='text-background md:text-xl cursor-pointer font-man mt-3'>Lorem ipsum dolor sit amet.</li>
            <li className='text-background md:text-xl cursor-pointer font-man mt-3'>Lorem ipsum dolor sit amet.</li>
            <li className='text-background md:text-xl cursor-pointer font-man mt-3'>Lorem ipsum dolor sit amet.</li>
            <li className='text-background md:text-xl cursor-pointer font-man mt-3'>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
    </>
  )
}
const Footer = () => {
  return (
    <div id='footer' className='bg-footer flex flex-col py-5 px-5 sm:py-10 sm:px-10 mt-10'>
      <div className='flex sm:gap-10 md:gap-12 justify-center mb-5'>
        <List />
        <List />
        <div className='flex flex-col pt-0.5'>
        {llinks.map((item)=>{
                  return(<NavLink
                    to={item.dest}
                    key={item.name}
                    className={({ isActive }) =>
                      `${isActive ? 'text-white' : 'text-text_color'} font-man mt-1  sm:text-xl `
                    }
                  >
                    {item.name}
                  </NavLink>                  
                  )
                })}
        </div>
      </div>
      <div className='flex justify-center gap-5 mb-5'>
        <SocialIcon fgColor='#2D313A' bgColor='#4F535C' url='www.x.com' />
        <SocialIcon fgColor='#2D313A' bgColor='#4F535C' url='www.facebook.com' />
        <SocialIcon fgColor='#2D313A' bgColor='#4F535C' url='www.instagram.com' />
        <SocialIcon fgColor='#2D313A' bgColor='#4F535C' url='www.linkedin.com' />
        <SocialIcon fgColor='#2D313A' bgColor='#4F535C' url='www.pinterest.com' />
      </div>
      <div className='flex justify-center'>
        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam illum eligendi praesentium asperiores doloremque iste libero cumque adipisci laborum amet!</p>
      </div>
    </div>
  )
}

export default Footer