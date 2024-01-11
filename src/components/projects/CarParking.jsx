import React from 'react'
import SkillButton from '../common/SkillButton'
import parking from '../../assets/images/parking.PNG'

const CarParking = () => {
  return (
    <div className='bg-background py-10 px-8 lg:py-20 lg:px-20 '>
         <p className="text-brown font-sans text-2xl lg:text-4xl  text-center font-bold leading-10">
         Car Parking
        </p>
        <p className="text-brown font-sans text-xs lg:text-xl lg:px-44 text-center font-semibold pt-10 leading-10">
        This page contains the case study of an Online Parking lot project which includes the Project Overview, Tools Used and Live Links to the official product.</p>
       <div className='flex justify-center py-10 hover:cursor-pointer'>
       <SkillButton skills="See Live" onClick={()=>window.open("https://parking-lot-e7e23.web.app/home")}/>
       </div>
       
      <div className='flex justify-center py-10'>
      <img src={parking}>
      
      </img>
      </div>
      <p className="text-brown font-sans text-2xl lg:text-4xl py-10 text-start font-bold leading-10">
         Project Overview
        </p>

        <p className="text-brown font-sans text-xs lg:text-xl text-start font-normal pt-10 leading-10">
        React used to build front end interface with Material UI for responsive design and API developed
with Node.js and Express.js. MongoDB and Redis are used for database
- Firebase authentication features used for sign in and implemented components for admin to
delete and update user information
- A fully functional, responsive parking website - allows users to reserve spaces for cars nearby
while providing some basic information, also the parking lot owners to keep track of the
necessary data
        
        </p>

        <p className="text-brown font-sans text-2xl lg:text-4xl py-10 text-start font-bold leading-10">
         Tools Used
        </p>

        <div className='grid grid-cols-2 lg:grid-cols-6 gap-4'>
          <SkillButton skills="React"/>
          <SkillButton skills="Material Ui"/>
          <SkillButton skills="Node.js"/>
          <SkillButton skills="Express"/>

        </div>

        <p className="text-brown font-sans text-2xl lg:text-4xl py-10 text-start font-bold leading-10">
         Project Links
        </p>
        <div className='lg:w-1/6 w-1/2 hover:cursor-pointer'>
          <SkillButton skills="Github Link" onClick={()=>window.open("https://github.com/Naomy95/Parking-lot-client.git")}/>
        </div>
       
    </div>
  )
}

export default CarParking