import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

function App() {

  let [showContent , setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group" , {
      rotate : 10 ,
      duration : 2,
      ease : " Power4.easeInOut",
      transformOrigin : "50% 50%",
    })

    .to(".vi-mask-group" , {
      scale : 10,
      duration : 2,
      delay: -1.8,
      ease : "Expo.easeInOut",
      transformOrigin : "50% 50%",
      opacity : 0,
      onUpdate : function(){
        if(this.progress() >= 0.9){
          document.querySelector('.svg').remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(()=>{
    if(!showContent) return;
    gsap.to(".main",{
      scale : 1,
      rotate: 0, 
      duration : 2,
      delay : -1, 
      ease : "Expo.easeInOut"
    })
    gsap.to(".sky",{
      scale : 1,
      rotate: 0, 
      duration : 2,
      delay : -.8, 
      ease : "Expo.easeInOut"
    })
    gsap.to(".bg",{
      scale : 1,
      rotate: 0, 
      duration : 2,
      delay : -.8, 
      ease : "Expo.easeInOut"
    })
    gsap.to(".character",{
      scale : 1.4,
      rotate: 0, 
      bottom : "-25%",
      x : "-50%",
      duration : 2,
      delay : -.8, 
      ease : "Expo.easeInOut"
    })
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove",function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text" , {
        x: `${xMove * 0.4}%`
      })
      gsap.to(".bg" , {
        x: xMove * 1.7 
      })
    })
  },[showContent])

  return (
    <>
      <div className='svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]'>
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id='viiMask'>
            <rect width="100%" height="100%" fill='black' />
              <g className='vi-mask-group'>
                <text x="50%" y="50%" fontSize="250" textAnchor='middle' fill='white' dominantBaseline="middle" fontFamily='Arial Black'>VI</text>
              </g>

            </mask>
          </defs>
          <image href='./bg.png' width="100%" height="100%" preserveAspectRatio='xMidYMid slice' mask='url(#viiMask)'></image>
        </svg>
      </div>
      {
        showContent && (<div className='main w-full rotate-[-10deg] scale-[1.7]  bg-black '>
          <div className='landing w-full h-screen bg-black'>
            <div className='navbar w-full py-4 px-10  absolute top-0 left-0 z-[10]'>
            <div className="logo flex gap-7">
              <div className="lines flex flex-col gap-[5px]">
                <div className="line w-15 h-2 bg-white"></div>
                <div className="line w-8 h-2 bg-white"></div>
                <div className="line w-5 h-2 bg-white"></div>
              </div>
              <div className="text-4xl -mt-[8px] leading  -none text-white">Rockstar</div>
            </div>
            </div>
            
            <div className='imagesdiv overflow-hidden relative w-full h-screen '>
              <img className='sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
              <img className='absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />
              <div className='text text-white flex flex-col absolute  top-0 left-1/2 -translate-x-1/2'>
              <h1 className='text-[6rem] leading-none -ml-29'>grand</h1>
              <h1 className='text-[6rem] leading-none '>theft</h1> 
              <h1 className='text-[6rem] leading-none -ml-29'>auto</h1>
            </div>
              <img className='absolute character -bottom-[150%] h-[570px] left-1/2 scale-[3] rotate-[-20deg] -translate-x-1/2' src="./girlbg.png" alt="" />
              
            </div>
            <div className='btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent'>
                <div className='flex gap-4 items-center'>
                <i className="text-2xl ri-arrow-down-line"></i>
                <h3 className='text-xl font-[Helvetica]'>Scroll Down</h3>
                </div>
                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]' src="./ps5.png" alt="" />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center  bg-black ">
            <div className="cntnr flex text-white w-full h-[100%]  ">
            <div className='limg relative w-1/2 h-full'>
              <img src="./imag.png" className='h-[550px]  absolute top-1/2 left-1/2 -translate-x-1/2 scale-[1.1] -translate-y-1/2' alt="" />
            </div>
            <div className='rg w-[40%] py-15'>
              <h1 className='text-6xl'>Still Running,</h1>
              <h1 className='text-6xl'>Not Hunting</h1>
              <p className='mt-10 text-[18px] font-[Helvetica]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus veritatis amet fugit? Aperiam ad obcaecati reiciendis in. Nobis perspiciatis corrupti inventore ipsam.</p>
              <p className='mt-3 text-[18px] font-[Helvetica]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam deleniti voluptates deserunt enim voluptatibus consectetur commodi quae quaerat.</p>
              <p className='mt-10 text-[18px] font-[Helvetica]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam deleniti voluptates deserunt enim voluptatibus consectetur commodi quae quaerat.</p>
              <button className='bg-yellow-500 px-10 py-4 mt-10 text-xl text-black'>Download Now</button>
            </div>
            </div>
            
          </div>
           </div>
        
      )}
    </>
  )
}

export default App