import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div>
      <div className='flex justify-center gap-5 font-[woff500] mb-[1vh] text-white'>
        <Link to='/projects' className='font-[woff500] text-[6vw] border-3 px-5 py-0 border-white rounded-full leading-[6vw] pt-1.5 hover:border-[#D3FD50] bottomText hover:text-[#D3FD50] '>WORK</Link>
        <Link to='/agence' className='font-[woff500] text-[6vw] border-3 px-5 py-0 border-white rounded-full leading-[6vw] pt-1.5 hover:border-[#D3FD50] bottomText hover:text-[#D3FD50] '>AGENCE</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
