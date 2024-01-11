import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/header2.jpg"

const Header = () => {
  const navigate =useNavigate()
  return (


      <div
       className="h-screen"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundPosition: 'center'
          
          
        }}
      
      >
     
        
        <div  className=" grid lg:grid-cols-2 grid-cols-1 h-full  " 
        > 
        <div className="hidden lg:block"></div>
        <div className="flex flex-col px-8 py-10 lg:px-20 lg:py-0 lg:justify-center border ">
        <p className="text-black font-sans text-2xl lg:text-4xl  text-start font-bold leading-10">
         Hi, I am NOOR E ZANNAT NAOMY
        </p>
        <p className="text-black font-sans text-xs lg:text-base text-start font-semibold pt-10 leading-10">
        A dedicated developer committed to optimizing frontend and backend components to deliver exceptional web experiences.
        
        
        
        </p>
      
       
        <div className="flex border-[2px] border-black p-2 w-40 mt-10 hover:cursor-pointer"
        onClick={()=>window.open('https://drive.google.com/file/d/1Y1tFix632MpQVKVeZV2WDfGARfinShvN/view?usp=sharing', '_blank')}
        >
        <svg class="w-6 h-6 text-gray-800 dark:text-white pt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
</svg>
       <p  className=" text-xs lg:text-base  text-black font-sans ml-2">
          Download CV
        </p>
       
       </div>
        </div>
         

       
        {/* <img src={image} alt="" /> */}
       
        </div>
        {/* <img src={image} style={{border:"1px solid red"}}></img> */}
      </div>
  
  );
};

export default Header;
