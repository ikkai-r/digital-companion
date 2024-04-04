"use client"

import React from 'react'
import LimbContainer from './LimbContainer';

export default function LimbTracker() {

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

  const LIMBS = [
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

  LIMBS.forEach(limb => {
    const raceColors = COLORS.find(color => color[limb.race.toLowerCase()]);
    if (raceColors) {
      limb.color = raceColors[limb.race.toLowerCase()];
      limb.colorbg = raceColors[`${limb.race.toLowerCase()}-bg`];
    }
  });

  return (
    <div className='w-full bg-text rounded-md mt-4 p-4'>
        <div className='w-full flex justify-between'>
          <p className='uppercase accent-text text-accent2 bold text-3xl'>
            Limbs 
          </p>
          <p className='uppercase accent-text text-accent2 bold text-3xl'>
            4 
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
