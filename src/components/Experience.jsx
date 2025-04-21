import React from 'react'
import Textframe from './Textframe'

function Experience() {
  return (
    <div className='flex-col gap-3'>
        <Textframe imgsrc={'/vite.svg'} title={"Northwestern Medicine"} description={"Technology Support Analyst"}/>
        <Textframe imgsrc={'/vite.svg'} title={"John Deere"} description={"Product Engineer"}/>
        <Textframe imgsrc={'/vite.svg'} title={"University of Iowa"} description={"IT Support Specialist"}/>
        <Textframe imgsrc={'/vite.svg'} title={"Omni Hotels & Resorts"} description={"Technology Bartender"}/>
    </div>
  )
}

export default Experience;