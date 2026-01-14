import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef()
  const imgRef = useRef()

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480x640.jpg'
  ]
  

  useGSAP(function() {
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:"top 20%",
        end:"top -100%",
        scrub:5,
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        onUpdate:(e)=>{
          let imgIndex = 0;
          if(e.progress < 1) {
            imgIndex = Math.floor((e.progress * imageArray.length))
          } else {
            imgIndex = imageArray.length - 1
          }
          console.log(imgIndex)
          imgRef.current.src = imageArray[imgIndex]
          
        }
      }
    })
  })

  return (

   <div className='relative py-1'>
      <div ref={imageDivRef} className='agenceImg absolute top-[20vh] left-[27vw] h-[20vw] w-[15vw] rounded-3xl overflow-hidden'>
        <img ref={imgRef} className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"/>
      </div>
     <div className='relative font-[woff500] mt-[35vh]'>
      <div className='text-[20vw] text-center leading-[17vw]'>
        <h1>SEVEN7Y<br></br>TWO</h1>
      </div>
      <div className='text-4xl'>
        <p className='unknownText2 pl-[40%]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
    </div>
   </div>

  )
}

export default Agence
