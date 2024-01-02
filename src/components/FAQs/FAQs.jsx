import React from 'react'
import data from './Data'
import { useState } from 'react'
import {BsPlus, BsDash} from 'react-icons/bs'

const FAQs = () => {
  const [selected, setSelected] = useState(null)
  const handleClick = (i) =>{
    if (selected === i){
      setSelected(null)
    }

    else{
      setSelected(i)
    }

  }
  return (
    <div className='flex flex-1 bg-black font-man px-10 py-12 flex-col gap-4'>
      <h2 className='text-text_color text-3xl font-man'>Frequently Asked Questions:</h2>
      <div className='flex flex-col gap-3'>
        {data.map((item, i)=>{
          return(
            <div className='flex flex-col bg-footer rounded pb-4' key={i}>
              <div className='rounded flex justify-between text-accfontmob sm:text-2xl text-h3_color py-4 px-3 items-center' onClick={()=>handleClick(i)}>
                {item.quest}
                {selected === i ? <BsDash size={20} color='#C2843A'/> : <BsPlus size={20} color='#C2843A' />}
              </div>
              <div className={selected === i ? 'ans-div show rounded flex flex-wrap': 'ans-div'}>
                <p className='text-gray-400 text-left'>{item.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FAQs