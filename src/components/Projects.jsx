import React from 'react'
import Textframe from './Textframe'

function Projects() {
  return (
    <div className='flex-col gap-3 items-center justify-center align-middle'>
        <Textframe imgsrc={'/imgs/Github.svg'} title={"Album Art Extractor"} description={"Album art cover color palette extractor"} description2={["JavaScript", 'Vite', 'React', 'Node.js']} link={'https://github.com/emmanuel-jaimes/muse.git/'}/>
        <Textframe imgsrc={'/imgs/Github.svg'} title={"Typing Typer"} description={"Performance Analyzing Typing test"} description2={['TypeScript', 'JavaScript', 'Firebase', 'Vite', 'Tailwind']} link={'https://github.com/emmanuel-jaimes/typingtyper.git'} />
        <Textframe imgsrc={'/imgs/Github.svg'} title={"IoT Home Thermostat"} description={"IoT temperature control system"} description2={['JavaScript', 'Firebase', 'Embedded Programming', 'Architecture Design', ]} link={'https://github.com/emmanuel-jaimes/iot.git'}/>
        <Textframe imgsrc={'/imgs/Github.svg'} title={"Wordle Remix"} description={"Hackathon Class project, implemented using Java"} description2={['Java', 'JavaFX', 'Server/Client Desing', 'Multithreading', 'Concurrency']} link={'https://github.com/emmanuel-jaimes/uni-projects/tree/main/WordleRemix'}/>
        <h1 className='justify-center flex right-2/4 text-white text-5xl font-bold tracking-widest'>...</h1>
        <Textframe imgsrc={'/imgs/Github.svg'} title={'More contributions coming...'} description={'Always learning and always improving. Many ideas currently in the making...'} description2={['Stay Tuned']} link={'https://github.com/emmanuel-jaimes/'}/>    
    </div>
  )
}

export default Projects;