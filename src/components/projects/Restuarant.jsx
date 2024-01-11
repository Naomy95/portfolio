import React from 'react'
import SkillButton from '../common/SkillButton'
import hospital from '../../assets/images/food.PNG'

const Restuarant = () => {
  return (
    <div className='bg-background py-10 px-8 lg:py-20 lg:px-20 '>
         <p className="text-brown font-sans text-2xl lg:text-4xl  text-center font-bold leading-10">
          Salt and Pepper Restuarant
        </p>
        <p className="text-brown font-sans text-xs lg:text-xl lg:px-44 text-center font-semibold pt-10 leading-10">
        This page contains the case study of an Online Restuarant project which includes the Project Overview, Tools Used and Live Links to the official product.</p>
       <div className='flex justify-center py-10 hover:cursor-pointer'>
       <SkillButton skills="See Live" />
       </div>
       
      <div className='flex justify-center py-10'>
      <img src={hospital}>
      
      </img>
      </div>
      <p className="text-brown font-sans text-2xl lg:text-4xl py-10 text-start font-bold leading-10">
         Project Overview
        </p>

        <p className="text-brown font-sans text-xs lg:text-xl text-start font-normal pt-10 leading-10">
    -Developed the front-end interface using React with Tailwind CSS for responsive design and
integrated it with the back-end API built with Node.js and Express.js
<br />
- Implemented user authentication and admin panel
<br />
- Successfully implemented a fully functional and responsive online restuarant app with a user-friendly
interface, user authentication and restuarant booking system
        
        </p>

        <p className="text-brown font-sans text-2xl lg:text-4xl py-10 text-start font-bold leading-10">
         Tools Used
        </p>

        <div className='grid grid-cols-2 lg:grid-cols-6 gap-4'>
          <SkillButton skills="React"/>
          <SkillButton skills="Tailwind css"/>
          <SkillButton skills="Node.js"/>
          <SkillButton skills="Express"/>

        </div>

        <p className="text-brown font-sans text-2xl lg:text-4xl py-10 text-start font-bold leading-10">
         Project Links
        </p>
        <div className='w-1/6 hover:cursor-pointer'>
          <SkillButton skills="Github Link" onClick={()=>window.open("https://github.com/Naomy95/resturant_app_client.git")}/>
        </div>
       
    </div>
  )
}

export default Restuarant