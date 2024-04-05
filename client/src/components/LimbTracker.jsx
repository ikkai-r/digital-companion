"use client"

import React from 'react'
import LimbContainer from './LimbContainer';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function LimbTracker() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const playerNum = searchParams.get('player')

  const COLORS = [
    {
      'fantastical': 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600',
      'fantastical-bg': 'bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-600',
    },
    {
      'aquatic': 'bg-text2',
      'aquatic-bg': 'bg-sky-800',
    }, {
      'inorganic': 'bg-slate-600',
      'inorganic-bg': 'bg-slate-800',
    }, {
      'terrestrial': 'bg-amber-700',
      'terrestrial-bg': 'bg-amber-900'
    }
  ]

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_BACKEND
    fetch(`${API_URL}/view_parts/${playerNum}`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error:', error)
        console.log("here")
      })
  }, [])

  let LIMBS;
  if (isLoading) return <p>Loading...</p>
  if (!data) {
    LIMBS = [
      {
        code: 'MTS',
        color: '',
        colorbg: '',
        name: 'Mermaid Tail',
        race: 'Fantastical',
        str: '1',
        spe: '0',
        def: '-1',
        cha: '4'
      },
      {
        code: 'OCA',
        color: '',
        colorbg: '',
        name: 'Octopus Arm',
        race: 'Aquatic',
        str: '1',
        spe: '-1',
        def: '2',
        cha: '2'
      },
      {
        code: 'OCA',
        color: '',
        colorbg: '',
        name: 'Octopus Arm',
        race: 'Aquatic',
        str: '1',
        spe: '-1',
        def: '2',
        cha: '2'
      },
      {
        code: 'OCA',
        color: '',
        colorbg: '',
        name: 'Octopus Arm',
        race: 'Aquatic',
        str: '1',
        spe: '-1',
        def: '2',
        cha: '2'
      }
    ]

  } else {
    LIMBS = data.map(limb => {
      return {
        code: limb.id,
        name: limb.name,
        str: limb.str,
        def: limb.def,
        spe: limb.spd,
        cha: limb.cha,
        race: limb.fac
      }
    }
    )
  }
  LIMBS.forEach(limb => {
    const raceColors = COLORS.find(color => color[limb.race.toLowerCase()]);
    if (raceColors) {
      limb.color = raceColors[limb.race.toLowerCase()];
      limb.colorbg = raceColors[`${limb.race.toLowerCase()}-bg`];
    }
  });

  const numLimb = LIMBS.length

  return (
    <div className='w-full bg-text rounded-md mt-4 p-4'>
      <div className='w-full flex justify-between'>
        <p className='uppercase accent-text text-accent2 bold text-3xl'>
          Limbs
        </p>
        <p className='uppercase accent-text text-accent2 bold text-3xl'>
          {numLimb}
        </p>
      </div>

      <div className='w-full max-h-[350px] min-h-[350px] overflow-y-auto'>

        {LIMBS.map(limb => (
          <LimbContainer
            key={limb.code}
            limb={limb}
          />
        ))}

      </div>
    </div>
  )
}
