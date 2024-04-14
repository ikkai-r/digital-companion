import React, {useState} from 'react'
import SearchBar from '@/components/SearchBar'
import StatsTracker from '@/components/StatsTracker'
import Buttons from '@/sections/view/Buttons'
import LimbTracker from '@/components/LimbTracker'
import { useSearchParams } from 'next/navigation'

export default function View() {
    const searchParams = useSearchParams()
    const [currentPlayer, setCurrentPlayer] = useState(searchParams?.get('player') ?? '')
    const [dataStats, setDataStats] = useState<any[]>([])
    const [dataLimbs, setDataLimbs] = useState(null)

    const fetchDataStats = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_BACKEND;
        const response = await fetch(`${API_URL}/api/view_all_stats`);
        const dataStats = await response.json();
        console.log('dataStats here in view', dataStats);
        setDataStats(dataStats);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchDataLimbs = async () => {
      try {
          const API_URL = process.env.NEXT_PUBLIC_BACKEND;
          const response = await fetch(`${API_URL}/api/view_parts/${currentPlayer}`);
          const dataLimbs = await response.json();
          console.log('datalimbs here in view', dataLimbs);
          setDataLimbs(dataLimbs);
      } catch (error) {
          console.error('Error:', error);
      }
    };

    return (
    <div className='p-6 flex flex-col'>
      
        <SearchBar
          fetchLimbData={fetchDataLimbs}
          fetchStatsData={fetchDataStats}
        />
        <StatsTracker
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          fetchData={fetchDataStats}
          data={dataStats}/>
        <LimbTracker
          playerView={currentPlayer}
          fetchData={fetchDataLimbs}
          data={dataLimbs}
          />
        <Buttons
        playerView={currentPlayer}/>
      </div>
  )
}
