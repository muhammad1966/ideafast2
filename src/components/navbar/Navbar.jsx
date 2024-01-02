import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import {useState} from 'react'
import llinks from '../../Links'

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    
    <div className='flex min-w-full min-h-fit items-center px-5 py-3 justify-between bg-black sticky z-10'>
      <div className='w-50'>
        <Link to='/' className='text-text_color text-2xl sm:text-5xl font-logo' >
          IdeaFast
        </Link>
      </div>
      <div className='hidden sm:hidden md:hidden lg:flex items-center flex-2 justify-between w-2/4'>
          {llinks.map((item) => (
        <NavLink
          to={item.dest}
          key={item.name}
          className={({ isActive }) =>
            `${isActive ? 'text-white' : 'text-text_color'} font-man sm:text-sm md:text-xl`
          }
        >
          {item.name}
        </NavLink>
      ))}
      <a href="#footer" className='font-man sm:text-sm md:text-xl text-text_color m-0'>Contact Us</a>

      </div>
      <div className='items-center justify-self-end  hidden sm:hidden md:flex md:ml-auto lg:m-0'>
          <p className='text-white text-2sm cursor-pointer'>Sign In</p>
          <button className='bg-red-700 font-man py-2.5 ml-4 px-4 border-none rounded text-white'>Sign Up</button>
      </div>

      <div className='sm:flex  lg:hidden relative ml-5'>
          {
            isToggled ? <RiCloseLine size={27} color='#C2843A' onClick={()=>setIsToggled(false)}/>
          : <RiMenu3Line size={27} color='#C2843A' onClick={()=>setIsToggled(true)}/>
          }

          {
            isToggled &&
            (
              <div className='flex flex-col animate-anim1 absolute top-12 right-2 bg-footer h-70 w-40 items-center py-8 rounded justify-between'>
                {llinks.map((item)=>{
                  return(<NavLink
                    to={item.dest}
                    key={item.name}
                    className={({ isActive }) =>
                      `${isActive ? 'text-white' : 'text-text_color'} font-man mt-4  sm:text-xl `
                    }
                  >
                    {item.name}
                  </NavLink>                  
                  )
                })}
                <div className='items-center justify-self-end flex sm:flex flex-col md:hidden'>
                  <p className='text-white text-2sm cursor-pointer mb-4 mt-4'>Sign In</p>
                  <button className='bg-red-700 font-man  py-2.5 px-4 border-none rounded text-white'>Sign Up</button>
                </div>
              </div>
            )
          }
      </div>
    </div>
    
  )
}

export default Navbar