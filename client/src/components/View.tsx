import React, {useState} from 'react'
import SearchBar from '@/components/SearchBar'
import StatsTracker from '@/components/StatsTracker'
import Buttons from '@/sections/view/Buttons'
import LimbTracker from '@/components/LimbTracker'
import { useSearchParams } from 'next/navigation'

export default function View() {
    const searchParams = useSearchParams()
    const [currentPlayer, setCurrentPlayer] = useState(searchParams?.get('player') ?? '')

  return (
    <div className='p-6 flex flex-col'>
        <SearchBar/>
        <StatsTracker
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}/>
        <LimbTracker
          playerView={currentPlayer}/>
        <Buttons
        playerView={currentPlayer}/>
      </div>
  )
}
