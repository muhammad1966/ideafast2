import React from 'react'
import data from './Data'

const lorem = ()=>{
  return(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero aliquam quisquam quis accusamus id nobis recusandae? Recusandae, beatae, sit quo minima eius, dolores repudiandae corporis provident facilis harum voluptatum!"
  )
}


const Blog = () => {
  return (
    <div className='flex flex-col bg-black flex-1 py-10 px-6'>
      <h2 className='text-text_color text-3xl mb-4'>Our Blog</h2>
      <div className='flex flex-col gap-6'>
        {data.map((item, i)=>{
          return(
            <div className='bg-footer flex flex-row items-center' key={i}>
              <div className='hidden md:flex grow flex-1/2'>
                <img className='max-w-[150px] h-full flex' src={item.picture} alt="" />
              </div>
              <div className='flex flex-col flex-3 pl-3 pt-4 pb-2 justify-start'>
                <h2 className='text-xl font-man font-bold bg-clip-text text-transparent bg-gradient-to-r  from-background to-text_color'>
                  {item.title}
                </h2>
                <p className='text-kala'>
                  {item.subtitle + ' ' + lorem()} 
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog