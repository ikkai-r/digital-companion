import React from 'react'
import SearchBar from '@/components/SearchBar'
import StatsTracker from '@/components/StatsTracker'
import LimbTracker from '@/components/LimbTracker'
import { Button } from 'flowbite-react'
import { PiSneakerMove } from "react-icons/pi";
import { FaRegFlag } from "react-icons/fa6";


export default function ViewCharacterPage() {
  return (
    <section id='ViewCharacterPage' className='bg-background w-full min-h-screen text-text primary-text flex flex-col'>
      <div className='p-6 flex flex-col'>
        <SearchBar/>
        <StatsTracker/>
        <LimbTracker/>
        <div className='w-full flex gap-2 justify-center mt-5'>
        <Button className='bg-accent2 border-none accent-text text-background text-2xl p-2 w-full'  size="xl"> <p>MOVE</p></Button>
        <Button className='bg-accent border-none accent-text text-background text-2xl p-2 w-full'  size="xl">EVENT</Button>
        <Button className='bg-red-500 border-none accent-text text-background text-2xl p-2 w-full'  size="xl">COMBAT</Button>
        </div>
        
      </div>
    </section>
  )
}
