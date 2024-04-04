import React from 'react'
import Image from 'next/image'
import { Button } from 'flowbite-react'

export default function StatsContainer({color, playernum, str, def, spe, cha}) {
  return (
    <div className={`w-full py-5 rounded-md px-3`} style={{backgroundColor: color}}>
    <div className='grid grid-cols-3 gap-2'>
    <div className='col-span-1 flex items-center w-full flex-col gap-2 mt-8'>
      <Image
          src={`/assets/P${playernum}_icon.png`}
          width={90}
          height={90}
          alt={`Player ${playernum} Icon`}
          className='rounded-full border-4 border-double border-zinc-100'
        />
        <p className='accent-text uppercase'>
          Player {playernum}
        </p>
        
    </div>
      <div className='w-full col-span-2 pl-3 accent-text uppercase text-white'>
          <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4'>
            <p>Strength</p>
            <p>{str ? str : '0'}</p>
          </div>
          

          <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4 mt-2'>
            <p>Defense</p>
            <p>{def ? def : '0'}</p>
            </div>
        

          <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4 mt-2'>
            <p>Speed</p>
            <p>{spe ? spe : '0'}</p>
            </div>
        
          
          <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4 mt-2'>
            <p>Charisma</p>
            <p>{cha ? cha : '0'}</p>
            </div>

            <Button className='accent-text w-full uppercase bg-accent2 border border-white border-2 mt-2'>Add Buff / Debuff</Button>

      </div>
    </div>
    
</div>

  )
}
