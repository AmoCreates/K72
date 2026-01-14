import React from 'react'
import Video from '../home/Video'
import HomeHeroText from '../components/HomeHeroText'
import HomeBottomText from '../components/HomeBottomText'

const Home = () => {
  return (
    <div className='homePage overflow-hidden'>
      <div className='h-screen w-screen fixed'>
        <Video/>
      </div>
      <div className='h-screen w-screen relative flex flex-col overflow-hidden'>
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
      <div className='unknownText absolute top-[70vh] left-[60vw] text-white flex justify-end font-[woff500] text-[1vw]'>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.
      </div>
       
    </div>
  )
}

export default Home
