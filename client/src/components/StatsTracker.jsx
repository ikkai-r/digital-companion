import React from 'react'
import Image from 'next/image'


export default function StatsTracker() {
  
  return (
    <div className='w-full py-5 bg-[#ff844f] rounded-md mt-7 px-3'>
        <div style={{width: '2px', height: '100%', color: 'white'}}>

        </div>
        <div className='grid grid-cols-3 gap-2'>
        <div className='col-span-1 flex items-center w-full flex-col gap-2 pt-3'>
          <Image
              src="/assets/P1_icon.png"
              width={90}
              height={90}
              alt="Player 1 Icon"
              className='rounded-full border-4 border-double border-zinc-100'
            />
            <p className='accent-text uppercase'>
              Player 1
            </p>
         </div>
          <div className='w-full col-span-2 pl-3 accent-text uppercase text-white'>
              <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4'>
                <p>Strength</p>
                <p>10</p>
              </div>
              

              <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4 mt-2'>
                <p>Defense</p>
                <p>3</p>
                </div>
            

              <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4 mt-2'>
                <p>Speed</p>
                <p>10</p>
                </div>
             
              
              <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4 mt-2'>
                <p>Charisma</p>
                <p>10</p>
                </div>
             
          </div>
        </div>
         
    </div>
  )
}
