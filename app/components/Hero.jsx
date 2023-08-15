import React from 'react'

function Hero() {
  return (
    <>
        <div className='h-[30rem] lg:h-[40rem] flex flex-col justify-center items-center gap-4'>
        <div className='flex flex-col items-center gap-6'>
            <p className='flex items-center light:text-black font-medium text-xl'>Hey there, <span className='text-[#5E3BEE] ml-1'>I'm Nacht Faust</span></p>
            <h1 className='flex items-center text-black font-bold text-4xl lg:text-6xl text-center max-w-4xl'>Building discord bots, websites, experience and more.</h1>
        </div>
        <div className='flex py-3 px-6 rounded-full justify-center items-center gap-2 bg-[#101010] mt-6'>
            <a href='/contact' className='text-white text-md font-medium'>Contact Me</a>
        </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='inline-flex px-2 py-2 gap-2 border border-black rounded-full'>
                <i className='fas fa-chevron-down text-sm text-black' />
            </div>
        </div>
    </>
  )
}

export default Hero