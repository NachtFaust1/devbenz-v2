import React from 'react'

function Footer() {
  return (
    <div className='w-full pb-5 pt-16'>
        <div className='mx-auto w-full'>
            <div className='flex items-center space-x-5'>
                <div className='flex-1 h-px bg-black/20'></div>
                <div className='flex-1 h-px bg-black/20'></div>
            </div>
            <div className='hidden sm:flex my-3 items-center justify-between'>
                <h1 className='text-black'>Copyright © 2023-2024</h1>
                <h1 className='text-black'>Developed by Nacht</h1>
            </div>
            <div className='sm:hidden my-3 flex flex-col items-center justify-center'>
                <h1 className='text-black'>Copyright © 2023-2024</h1>
                <h1 className='text-black'>Developed by Nacht</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer