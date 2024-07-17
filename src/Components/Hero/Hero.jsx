import React from 'react';
import HeroImg from "../../assets/headphone.png";
import HeroBg from "../../assets/Bg1.jpg";
import PrimaryButton from '../Shared/PrimaryButton';


const BgStyle ={
    backgroundImage:`url(${HeroBg})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
    width:"100%",
    hieght:"150%",

}

const Hero = () => {
  return (
   <>
    <div style={BgStyle} className='  relative z-[-1]'>
      <div className="container py-16 sm:py-0 ">
        <div className="grid grid-cols-1 
        sm:grid-cols-2
        gap-4 place-items-center min-h-[600px]">
       {/* text-content section */}
       <div className='space-y-7 text-dark order-2 sm:order-1'>
        <h1 className='text-5xl' >Welcome to Dream Electronics with {""}
            <span className='text-blue-700  font-cursive text-7xl'>Open Hands </span> {""}
             & quality <br />
             goods</h1>
            <p className="lg:pr-64 text-2xl">
          Quality goods Delivered to your 
          Door from $230.000 per week
        </p>
        {/* button section */}
        <div className='flex items-center group'>
        <PrimaryButton/>
    </div>
  </div >
       {/* Image section */}
       <div className=' order-1 relative z-30  sm:order-2 '>
       <img src={HeroImg} alt="" 
       className=" w-full sm:scale-125 sm:translate-y-16 h-[500px] pl-10 pb-10" />
       </div>
       </div>
      </div>
      </div>
   </>
  )
}

export default Hero;
