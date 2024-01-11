import React from 'react'
import PcScreen from '../common/PcScreen'
import parking from '../../assets/images/parking.PNG'
import hospital from '../../assets/images/hospital.PNG'
import food from '../../assets/images/food.PNG'
import poridhi from '../../assets/images/logo.png'

import Projectbg from '../common/ProjectBg'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate= useNavigate()
  return (
    <div className='bg-background py-12 px-8 lg:px-20'>
         <p className="text-brown font-sans font-semibold text-2xl lg:text-4xl  text-start  leading-10">
          Projects
        </p>
        <div className='pt-10'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                {/* <PcScreen source={parking}/> */}
             <div className=' flex items-center justify-center'>
             <Projectbg 
                image={parking}
                onClick={()=>{navigate('/projects/parking')}}
                />
             </div>
             <div className=' flex items-center justify-center'>
             <Projectbg 
                image={hospital}
                onClick={()=>{navigate('/projects/hospital')}}
                />
             </div>
              
                  <div className=' flex items-center justify-center'>
                  <Projectbg 
                image={food}
                onClick={()=>{navigate('/projects/food')}}
                />
              </div>
              
            </div>
            {/* <div className='lg:py-20 py-10'>
            <p className="text-brown font-sans font-semibold text-2xl lg:text-4xl  text-start  leading-10">
        Official Projects
        </p>
        <Projectbg 
                image={poridhi}
                onClick={()=>{navigate('/projects/food')}}
                />
            </div> */}
        </div>
    </div>
  )
}

export default Projects