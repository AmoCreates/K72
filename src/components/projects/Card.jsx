import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='img relative group flex transition-all overflow-hidden hover:rounded-4xl h-full w-[50%]'>
            <img className='w-full h-full object-cover' src={props.url1}/>
            <div className='absolute transition-all opacity-0 group-hover:opacity-100 h-full w-full flex justify-center items-center hover:bg-black/5 '>
              <h1 className='text-white text-[3vw] pt-1 px-3 font-[woff500] border-2 rounded-full'>view project</h1>
            </div>
        </div>

        <div className='img relative group flex transition-all overflow-hidden hover:rounded-4xl h-full w-[50%]'>
            <img className='w-full h-full object-cover' src={props.url2}/>
            <div className='absolute transition-all opacity-0 group-hover:opacity-100 h-full w-full flex justify-center items-center hover:bg-black/5 '>
              <h1 className='text-white text-[3vw] pt-1 px-2 font-[woff500] border-2 rounded-full'>view project</h1>
            </div>
        </div>     
    </> 
  )
}

export default Card

