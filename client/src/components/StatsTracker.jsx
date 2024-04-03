import React from 'react'
import Image from 'next/image'


export default function StatsTracker() {
  return (
    <div className='w-full py-5 bg-accent3 rounded-md mt-10 px-3'>
         <div className='w-full text-center'>       
          <p className='text-3xl accent-text uppercase'>
              Player 1 stats
        </p>
        </div>
        <div style={{width: '2px', height: '100%', color: 'white'}}>

        </div>
        <div className='grid grid-cols-3 gap-2 mt-2'>
        <div className='col-span-1 flex items-center w-full flex-col gap-2 pt-3'>
          <Image
              src="/assets/P1_icon.png"
              width={90}
              height={90}
              alt="Player 1 Icon"
              className='rounded-full border-4 border-double border-zinc-100'
            />
         </div>
          <div className='w-full col-span-2 p-3 accent-text uppercase text-white'>
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
