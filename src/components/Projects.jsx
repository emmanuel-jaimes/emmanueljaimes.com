import React from 'react'
import Textframe from './Textframe'

function Projects() {
  return (
    <div className='flex-col gap-3'>
        <Textframe imgsrc={'/vite.svg'} title={"Project 1"} description={"Description"}/>
        <Textframe imgsrc={'/vite.svg'} title={"Project 2"} description={"Description"}/>
        <Textframe imgsrc={'/vite.svg'} title={"Project 3"} description={"Description"}/>
        <Textframe imgsrc={'/vite.svg'} title={"Project 4"} description={"Description"}/>
    </div>
  )
}

export default Projects