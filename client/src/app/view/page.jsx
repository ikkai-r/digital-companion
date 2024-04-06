"use client"

import React, {useState} from 'react'
import SearchBar from '@/components/SearchBar'
import StatsTracker from '@/components/StatsTracker'
import Buttons from '@/sections/view/Buttons'
import LimbTracker from '@/components/LimbTracker'
import { useSearchParams } from 'next/navigation'


export default function ViewCharacterPage() {
  
  const searchParams = useSearchParams()
  const [currentPlayer, setCurrentPlayer] = useState(searchParams.get('player'))
  return (
    <section id='ViewCharacterPage' className='bg-background w-full min-h-screen text-text primary-text flex flex-col'>
      <div className='p-6 flex flex-col'>
        <SearchBar/>
        <StatsTracker
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}/>
        <LimbTracker
          playerView={currentPlayer}/>
        <Buttons/>
      </div>
    </section>
  )
}
