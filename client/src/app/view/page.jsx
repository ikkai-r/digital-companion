import React from 'react'
import SearchBar from '@/components/SearchBar'
import StatsTracker from '@/components/StatsTracker'
import LimbTracker from '@/components/LimbTracker'
import Buttons from '@/sections/view/Buttons'


export default function ViewCharacterPage() {
  return (
    <section id='ViewCharacterPage' className='bg-background w-full min-h-screen text-text primary-text flex flex-col'>
      <div className='p-6 flex flex-col'>
        <SearchBar/>
        <StatsTracker/>
        <LimbTracker/>
        <Buttons/>
        
      </div>
    </section>
  )
}
