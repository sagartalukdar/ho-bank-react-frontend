import React from 'react';
import styles from '../style';
import { robot,discount } from '../assets';
import Getstarted from './GetStarted';
const Hero = () => (
 
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount for {" "}
          <span className='text-white'>1 Month</span> Account
        </p>
      </div> 

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <Getstarted/>
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method.
      </h1>

      <p className={`${styles.paragraph} max-w-[450px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero inventore illum veniam, optio dolore molestiae quis soluta necessitatibus repellat consectetur expedita saepe ab aliquam. Suscipit accusantium laudantium quibusdam culpa magnam?</p>

    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="" className='w-[100%] h-[100%] relative z-[5]'/>
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient"></div>
      <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}> <Getstarted/> </div>
   

  </section>
)



export default Hero
