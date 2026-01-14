import React from 'react'
import Video from '../home/Video'

const HomeHeroText = () => {
  return (
    <div className='heroText flex justify-center items-start h-full font-[woff300] text-white'>
      <div className='text-[10vw] leading-[1] text-center uppercase'>
        The spark for
        <div className='flex justify-center items-center'>
          all
          <div className='h-[8vw] w-[18vw] rounded-full overflow-hidden -mt-3.5'><Video/></div>
          things
        </div>
        creative
      </div>
    </div>
  )
}

export default HomeHeroText
