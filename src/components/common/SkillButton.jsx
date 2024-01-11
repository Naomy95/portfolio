import React from 'react'

const SkillButton = ({skills,onClick}) => {
  return (
    <div className='rounded-md p-2 bg-skyblue' onClick={onClick}>
    <p className='text-xs lg:text-xl text-brown font-sans font-medium'>{skills}</p>
    </div>
  )
}

export default SkillButton