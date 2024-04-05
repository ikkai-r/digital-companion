import React from 'react'

export default function CombatPage() {
  let predator = 1;

  return (
    <section id="CombatPage" className='bg-background w-full min-h-screen text-text primary-text flex flex-col'>
      <div className='w-full flex flex-col text-center text-3xl accent-text justify-center mt-5'>
        <p>Player {predator}</p>
        <p className='mt-4 uppercase'>challenges</p>
        <div className='flex gap-3 items-center justify-center w-full mt-4'>
        <p>Player</p>
        <select id="countries" class="bg-secondary text-text text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
              {predator === 1 ? null : <option value="1">1 ‎ ‎ </option>}
              {predator === 2 ? null : <option value="2">2 ‎ ‎ </option>}
              {predator === 3 ? null : <option value="3">3 ‎ ‎ </option>}
              {predator === 4 ? null : <option value="4">4 ‎ ‎ </option>}
            </select>
        </div>
      </div>
    </section>
  )
}
