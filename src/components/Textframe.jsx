import { desc, div } from 'framer-motion/client'
import React from 'react'

function Textframe({imgsrc, title, description}) {
  return (
    <div className='py-5'>
    <div className='inline-flex gap-2 items-center p-2 text-2xl'>
            <img src={imgsrc} alt="" />
            <h1 className='font-semibold' >{title}</h1>
        </div>
        <p>{description}</p>
    </div>
  )
}

export default Textframe