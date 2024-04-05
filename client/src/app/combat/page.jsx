"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function CombatPage() {
  const searchParams = useSearchParams()
  const predator = searchParams.get('ptor')
  const prey = searchParams.get('prey')


  return (
    <section id="CombatPage" className='bg-background w-full min-h-screen text-text primary-text flex flex-col'>
      <div className='w-full flex flex-col text-center text-3xl accent-text justify-center mt-5'>
        
      </div>
    </section>
  )
}
