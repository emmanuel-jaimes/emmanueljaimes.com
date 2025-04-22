import { desc, div } from 'framer-motion/client'
import React from 'react'

function Textframe({imgsrc, title, description, timeframe, size}) {
  return (
    <div className='py-5 p-2'>
        <div className='inline-flex gap-2 items-center text-2xl'>
            <img src={imgsrc} alt="" className={size}/>
            <h1 className='font-semibold' >{title}</h1>
        </div>
        <div className='flex gap-4'>
            <p>{description}</p>
            <span className='text-gray-300 italic'>{timeframe}</span>
        </div>
    </div>
  )
}

export default Textframe