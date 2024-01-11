import React from 'react'
import image from '../../assets/images/Homescreen.jpg'


const PcScreen = ({source}) => {
  return (
    <div className=''
    style={{
        backgroundImage: `url("${source}")`,
        backgroundSize: "cover",
        height:'500px',
        
      }}
    >
  
    </div>
  )
}

export default PcScreen