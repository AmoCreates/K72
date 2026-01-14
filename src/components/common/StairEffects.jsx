import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const StairEffects = (props) => {
    const path = useLocation().pathname
    const stairParentRef = useRef()

    useGSAP(()=> {
      const tl = gsap.timeline();

      tl.to(stairParentRef.current, {
        display:'block',
        delay:-0.8
      })

      tl.from(".steps", {
        height:0,
        stagger:{
          amount:-0.1
        }
      })

      tl.to(".steps", {
        delay:1,
        y:'100%',
        stagger:{
          amount:-0.1
        }
      })

      tl.to(stairParentRef.current, {
        display:'none'
      })

      tl.to(".steps", {
        y:'0%'
      })
    }, [path])

  return (
    <div>
      <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
        <div className='h-full w-full flex'>
          <div className='steps h-full w-1/5 bg-black'></div>
          <div className='steps h-full w-1/5 bg-black'></div>
          <div className='steps h-full w-1/5 bg-black'></div>
          <div className='steps h-full w-1/5 bg-black'></div>
          <div className='steps h-full w-1/5 bg-black'></div>
        </div>
      </div>
    </div>
  )
}

export default StairEffects
