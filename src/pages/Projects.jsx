import React from 'react'
import Card from '../components/projects/card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  const cardData = [
    {
      img1:'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93',
      img2:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b'
    },

    {
      img1:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
      img2:'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
    },

    {
      img1:'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
      img2:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
    },

    {
      img1:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
      img2:'https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860'
    },

    {
      img1:'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',
      img2:'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f'
    },

    {
      img1:'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
      img2:'https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd'
    },

    {
      img1:'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14',
      img2:'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124'
    },

    {
      img1:'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757',
      img2:'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000'
    }
  ]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(".cardWrapper", {
      height:'10px',
      stagger: {
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.wrap',
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })

  return (
    <div className='projectsPage p-2'>
      <div className='workText flex pt-[50vh]'>
        <h1 className='font-[woff500] leading-[10vw] text-[11vw]'>Work</h1>
        <h1 className='fotn-[woff500] leading-[2vw] text-[3vw] font'>17</h1>
      </div>
      <div className='wrap'>
        {cardData.map(function (elem, key) {
          return (
            <div key={key} className='cardWrapper w-full h-[50vh] flex gap-2 mb-[1vh]'>
            <Card url1={elem.img1} url2={elem.img2}/>
            </div> 
          )
          
        })}
      </div>
    </div>
  )
}

export default Projects
