import React from 'react'
import SearchBar from '@/components/SearchBar'
import StatsTracker from '@/components/StatsTracker'
import LimbTracker from '@/components/LimbTracker'
import { Button } from 'flowbite-react'

export default function ViewCharacterPage() {
  return (
    <section id='ViewCharacterPage' className='bg-background w-full min-h-screen text-text primary-text flex flex-col'>
      <div className='p-6 flex flex-col'>
        <SearchBar/>
        <StatsTracker/>
        <LimbTracker/>
        <Button className='mt-5 bg-accent border-none accent-text text-background text-3xl p-2'  size="xl">COMBAT!</Button>
      </div>
    </section>
  )
}
