import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


const Links = () => {
    const link1Hover = useRef()
    const link2Hover = useRef()
    const link3Hover = useRef()   
    const link4Hover = useRef() 
    
  return (
    <>
        <Link to='/' className='fixed z-90 flex justify-centerlinks hover:text-[#D3FD50] items-center text-[11vw] leading-[8vw] w-[10vw] text-white bg-black top-0 right-0 '>
            <i class="ri-close-line"></i>
        </Link>
        <div className='flex flex-col justify-center font-[woff500] uppercase h-screen w-screen text-[9vw] bg-black overflow-hidden text-white' >

        <div  className='theLinks'>
            <div className='relative z-50 h-[9vw] top-[9vw] w-full bg-black'></div>

                <div className='links h-[9vw] z-90' 
                onMouseEnter={()=> { link1Hover.current.style.top='100%'}}
                onMouseLeave={()=> { link1Hover.current.style.top=0}}
                    >
                    <Link to='/projects' ref={link1Hover} className=' relative  z-40 flex items-center whitespace-nowrap transition-all h-full  leading-[11vw] shrink-0 text-black bg-[#D3FD50]'>
                        <div className=' movingLink flex leading-0 items-center whitespace-nowrap'>
                            <h1>SEE EVERYTHING</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"/>
                            <h1>SEE EVERYTHING</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"/>
                            <h1>SEE EVERYTHING</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"/>
                            <h1>SEE EVERYTHING</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"/>
                        </div>
                    </Link>
                    <div className='relative z-35 bg-black border-y h-full text-center w-full leading-[10vw]'>
                        <div to='/projects'>WORK</div>
                    </div>
                </div>

                <div className='links h-[9vw] ' 
                onMouseEnter={()=> { link2Hover.current.style.top='100%'}}
                onMouseLeave={()=> { link2Hover.current.style.top=0}}
                    >
                    <Link to='/agence' ref={link2Hover} className=' relative z-30 flex items-center whitespace-nowrap transition-all h-full  leading-[11vw] shrink-0 text-black bg-[#D3FD50]'>
                        <div className=' movingLink flex leading-0 items-center whitespace-nowrap'>
                            <h1>know us</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81"/>
                            <h1>know us</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"/>
                             <h1>know us</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81"/>
                            <h1>know us</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"/>
                        </div>
                    </Link>
                    <div className='relative z-25 bg-black border-y h-full text-center w-full leading-[10vw]'>
                        <Link to='/agence'>AGECNY</Link>
                    </div>
                </div>

                <div className='links h-[9vw] ' 
                onMouseEnter={()=> { link3Hover.current.style.top='100%'}}
                onMouseLeave={()=> { link3Hover.current.style.top=0}}
                    >
                    <div ref={link3Hover} className='relative z-20 flex items-center whitespace-nowrap transition-all h-full leading-[11vw] shrink-0 text-black bg-[#D3FD50]'>
                        <div className=' movingLink flex leading-0 items-center whitespace-nowrap'>
                            <h1>send us a fax</h1>
                            <i class="ri-poker-hearts-fill"></i>
                            <h1>send us a fax</h1>
                            <i class="ri-poker-hearts-fill"></i>
                            <h1>send us a fax</h1>
                            <i class="ri-poker-hearts-fill"></i>
                            <h1>send us a fax</h1>
                            <i class="ri-poker-hearts-fill"></i>   
                        </div>
                    </div>
                    <div className='relative z-15 bg-black border-y h-full text-center w-full leading-[10vw]'>
                        <Link>CONTACT</Link>
                    </div>
                </div>

                <div className='links h-[9vw] ' 
                onMouseEnter={()=> { link4Hover.current.style.top='100%'}}
                onMouseLeave={()=> { link4Hover.current.style.top=0}}
                    >
                    <Link to='/' ref={link4Hover} className='relative z-10 flex items-center whitespace-nowrap transition-all h-full leading-[11vw] shrink-0 text-black bg-[#D3FD50]'>
                        <div className=' movingLink flex leading-0 items-center whitespace-nowrap'>
                            <h1>read article</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"/>
                            <h1>read article</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"/>
                            <h1>read article</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"/>
                            <h1>read article</h1>
                            <img className='shrink-0 h-[7vw] w-[20vw] object-cover rounded-full' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"/>
                        </div>
                    </Link>
                    <div className='relative z-5 bg-black border-y h-full text-center w-full leading-[10vw]'>
                        <Link to='/'>HOME</Link>
                    </div>
                </div>
        </div>

        </div>

        <div className='hubOfHub absolute flex justify-between bottom-3 p-3 font-[woff500] text-white w-screen'>
            <div className='flex unknownTime items-center gap-4'>
                <i className="text-2xl ri-global-line"></i>
                <h1>MONTREAL_04:38:15</h1>
            </div>
            <div className='TheUnknowlinkHub'>
                <h1 className='unknownlinks1'>privacy policy</h1>
                <h1 className='unknownlinks1'>privacy notice</h1>
                <h1 className='unknownlinks1'>ethics report</h1>
                <h1 className='unknownlinks1'>consent choices</h1>
            </div>

            <div className='flex items-end gap-2 TheUnknownLinkHub2 text-3xl justify-evenly'>
                <h1 className='unknownlinks border-2 px-3 rounded-full leading-6 pt-1'>fb</h1>
                <h1 className='unknownlinks border-2 px-3 rounded-full leading-6 pt-1'>ig</h1>
                <h1 className='unknownlinks border-2 px-3 rounded-full leading-6 pt-1'>in</h1>
                <h1 className='unknownlinks border-2 px-3 rounded-full leading-6 pt-1'>be</h1>
            </div>
        </div>
    </>
    
  )
}

export default Links