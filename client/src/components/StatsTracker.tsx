"use client"
import React from 'react'
import { Carousel, Flowbite } from 'flowbite-react'
import type { CustomFlowbiteTheme } from "flowbite-react";
import StatsContainer from './StatsContainer';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function StatsTracker({currentPlayer, setCurrentPlayer}) {

  const [data, setData] = useState(null)
  const searchParams = useSearchParams()
  const playerNum = searchParams?.get('player') ?? '';

  useEffect(() => {

    const API_URL = process.env.NEXT_PUBLIC_BACKEND
    fetch(`${API_URL}/view_all_stats`)
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }, [])

  let PLAYERS;
  if (!data) {
    PLAYERS = [
      {
        color: '#ff844f',
        playerNum: '1',
        stats: {
          str: '0',
          def: '0',
          spd: '0',
          cha: '0'
        }
      },
      {
        color: '#CD3AFF',
        playerNum: '2',
        stats: {
          str: '0',
          def: '0',
          spd: '0',
          cha: '0'
        }
      },
      {
        color: '#E4273B',
        playerNum: '3',
        stats: {
          str: '0',
          def: '0',
          spd: '0',
          cha: '0'
        }
      },
      {
        color: '#61ebff',
        playerNum: '4',
        stats: {
          str: '0',
          def: '0',
          spd: '0',
          cha: '0'
        }
      },
    ]
  } else {
    PLAYERS = data.map((player) => {
      return {
        color: player.color,
        playerNum: player.playerNum,
        stats: {
          str: player.stats.str,
          def: player.stats.def,
          spd: player.stats.spd,
          cha: player.stats.cha
        }
      }
    })
    PLAYERS[0].color = '#ff844f'
    PLAYERS[1].color = '#CD3AFF'
    PLAYERS[2].color = '#E4273B'
    PLAYERS[3].color = '#61ebff'
    while (PLAYERS[0].playerNum != playerNum) {
      PLAYERS.push(PLAYERS.shift())
    }
  }

  const carouselTheme: CustomFlowbiteTheme['carousel'] = {
      "root": {
        "base": "relative h-full w-full",
        "leftControl": "absolute top-0 mt-16 pt-4 flex h-full items-center justify-center px-4 focus:outline-none",
        "rightControl": "absolute ml-14 top-0 mt-16  pt-4 flex h-full items-center justify-center px-4 focus:outline-none"
      },
      "indicators": {
        "active": {
          "off": "hidden bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
          "on": "hidden bg-white dark:bg-gray-800"
        },
        "base": "h-3 w-3 rounded-full",
        "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
      },
      "control": {
        "base": "border border-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10",
        "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
      },
    }


  return (

    <>
    
    <div className='h-70 sm:h-70 xl:h-80 2xl:h-96 mt-4'>
        <Carousel slide={false} theme={carouselTheme} onSlideChange={(index) => {
            let num = index + parseInt(playerNum)
            if(num > 4) num = num - 4
            setCurrentPlayer(String(num))
          }}>

          {PLAYERS.map(player => (
            <StatsContainer
              key={player.playerNum}
              playernum={player.playerNum}
              color={player.color}
              str={player.stats.str}
              def={player.stats.def}
              spe={player.stats.spd}
              cha={player.stats.cha}
            />
          ))}
        </Carousel>
    </div>
    
    </>

  )
}
