import React from 'react';
// import as from './abstract-minimalism-4k-gz.jpg'
// import {motion} from "framer-motion"
import Lottie from "lottie-react";
import hi from './LottieJSONfiles/ROBOT.json'
import iron from '../src/images/WhatsApp Image 2024-02-11 at 11.09.56_6adf1db8.jpg'
import {motion} from "framer-motion"
import {Popover } from '@headlessui/react'
import {
    ArrowPathIcon,
    GlobeAltIcon,
    CursorArrowRaysIcon,
    SquaresPlusIcon,
    ShoppingCartIcon,
    CurrencyRupeeIcon,
    ShieldCheckIcon,
    
  } from '@heroicons/react/24/outline'
  import { IoLogoCss3 } from "react-icons/io5";
  import { IoLogoHtml5 } from "react-icons/io5";
  import { SiTailwindcss } from "react-icons/si";
  import { IoLogoJavascript } from "react-icons/io5";
  import { FaReact } from "react-icons/fa";
  import { FaLinkedin } from "react-icons/fa6";
  import { SiGithub } from "react-icons/si";
import './index.css'





const products = [
  
    { name: 'Shopping Site', description: 'Explore my clothing store.', href: 'https://vivekbeast.github.io/vt-5/index.html', icon: ShoppingCartIcon },
    { name: 'FitnessApp', description: 'Gtime fitness app built using API', href: 'https://vivekbeast.github.io/Fitness_APP/', icon: ShieldCheckIcon },
    { name: 'Expense Tracker', description: 'Vgrow app built with Google Firebase', href: 'https://expense-tracker-374f6.web.app/', icon: CurrencyRupeeIcon },
    { name: 'Directionless Science', description: 'The greatest project & content.', href: 'https://vivekbeast.github.io/Dscience/', icon: CursorArrowRaysIcon },
    { name: 'Weather App', description: 'Using API, this site shows weather details.', href: 'https://vivekbeast.github.io/Weather-QuoteAPP/', icon: GlobeAltIcon },
    { name: 'Integrations', description: 'All-in-one WeBPAGE of all my projects.', href: 'https://vivekbeast.github.io/UP2/', icon: SquaresPlusIcon },
    { name: 'My First Webpage', description: "Let's time-travel back.", href: 'https://vivekbeast.github.io/Project4/', icon: ArrowPathIcon },
    
  
  
]

export default function Land(){
    return(
        <div className=' bg-gradient-to-b from-gray-800 via-slate-500 to-gray-800 static'>
          
            <section className='h-screen flex flex-col justify-center items-center'>
            <div className="container mx-auto flex justify-center items-center">
  <div className="flex flex-col md:flex-row items-center md:items-start">
    <div className="mr-4 mb-4 md:mb-0 p-4 md:p-6 lg:p-8 xl:p-10 rounded-md">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-50 mb-4 md:mb-6 lg:mb-8 xl:mb-10">
    Front-End React Developer 🧑🏻‍💻
  </h1>
  <p className="text-sm md:text-base lg:text-md xl:text-lg text-neutral-200 max-w-[20rem] md:max-w-[25rem] lg:max-w-[30rem] xl:max-w-[35rem] break-words mb-4 md:mb-6 lg:mb-8 xl:mb-10">
    Hi, I’m Vivek Tarnallya a Passionate React developer creating vibrant, responsive UIs to enhance user experiences
  </p>
  <div className='flex'>
    <a href='https://www.linkedin.com/in/vivek-tarnallya-981684259' target='_blank' rel='noopener noreferrer'>
      <FaLinkedin className='mt-2 mr-4 text-[25px] text-sky-500' />
    </a>
    <a href='https://github.com/vivekbeast' target='_blank' rel='noopener noreferrer'>
      <SiGithub className='mt-2 text-[25px]' />
    </a>
  </div>
</div>

    <div className=' flex justify-center items-center lg:pt-8'>
      <motion.dv
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="image-box"
      >
        <img className="image-logo w-full rounded-full" src={iron} alt="" />
      </motion.dv>
    </div>
  </div>
</div>
{/* w-full md:w-auto h-32 md:h-40 lg:h-48 xl:h-56 */}
            </section>
            <section className='h-screen flex flex-col'>
            <div className=' mt-8'>
            <Lottie className=' h-52 align-top' animationData={hi}></Lottie></div>
            <div className=' justify-center text-center -m-.5 p-2.5 mx-auto max-w-lg'>
            <h1 className=' justify-center text-2xl font-sans text-slate-50 text-center -m-.5 p-2.5 '> Projects</h1>
                <Popover>
                <div className="p-2 bg-slate-800 text-left rounded-xl">
                
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-slate-500"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-slate-100 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-slate-100">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
             </Popover>
            </div>
            </section>
            <section className=' h-screen  flex flex-col '>
                <div className='  justify-center text-center -m-.5 p-2.5 mt-[355px] mx-auto max-w-lg'>
                <h1 className=' justify-center text-2xl font-sans text-slate-50 text-center -m-.5 p-2.5'>What i Know...</h1>
                <div className="flex flex-wrap justify-center gap-4 bg-slate-800 p-5 rounded-md">
  <div className=" w-24 text-center bg-gray-200 p-4 rounded-md flex flex-row align-center justify-center">
    <h1>React</h1>
    <FaReact />
  </div>
  <div className=" w-26 text-center bg-gray-200 p-4 rounded-md flex flex-row align-center justify-center">
    <h1>Javascript</h1>
    <IoLogoJavascript/>
  </div>
  <div className=" w-26 text-center bg-gray-200 p-4 rounded-md flex flex-row align-center justify-center">
    <h1>Tailwind</h1>
    <SiTailwindcss />
  </div>
  <div className=" w-22 text-center bg-gray-200 p-4 rounded-md flex flex-row align-center justify-center">
    <h1>HTML</h1>
    <IoLogoHtml5 />
  </div>
  <div className=" w-22 text-center bg-gray-200 p-4 rounded-md flex flex-row align-center justify-center">
    <h1>CSS</h1>
    <IoLogoCss3 />
  </div>
  
</div>

                </div>
            </section>
        </div>

    )
}