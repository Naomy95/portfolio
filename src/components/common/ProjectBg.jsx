


import React, { useState } from 'react';
import './PcScreen.css'

const Projectbg = ({image,onClick}) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
   
  
    backgroundImage: isHovered
      ? 'none'
      : `url("${image}")`,
    backgroundColor: isHovered ?  'rgb(253, 246, 118)':'transparent' ,
    backgroundSize: 'cover',
    backgroundPosition:'center',
    
    transition: 'background-image 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
   
  };

  return (
    <div
    className='project'
      style={containerStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {
        isHovered ? (
<p className='text-brown font-semibold text-xl' onClick={onClick}>Case Study</p>
        ) : 
        (
<p className='text-white'></p>
        )
      }
    </div>
  );
};

export default Projectbg;
