import React from 'react'
import Textframe from './Textframe'

function Projects() {
  return (
    <div className='flex-col gap-3'>
        <Textframe imgsrc={'/vite.svg'} title={"Album Art Extractor"} description={"Album art cover color palette extractor"}/>
        <Textframe imgsrc={'/vite.svg'} title={"Typing Typer"} description={"Performance Analyzing Typing test"}/>
        <Textframe imgsrc={'/vite.svg'} title={"IoT Home Thermostat"} description={"IoT temperature control system"}/>
        <Textframe imgsrc={'/vite.svg'} title={"Project 4"} description={"Description"}/>
    </div>
  )
}

export default Projects