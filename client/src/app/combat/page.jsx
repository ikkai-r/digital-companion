"use client"

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Modal, Button } from 'flowbite-react'
import D20 from '@/components/D20'

export default function CombatPage() {
  const searchParams = useSearchParams()
  const predator = searchParams.get('ptor')
  const prey = searchParams.get('prey')

  const [predatorScore, setPredatorScore] = useState(3);
  const [preyScore, setPreyScore] = useState(2);
  const [rollNumPredator, setRollNumPredator] = useState(1);
  const [rollNumPrey, setRollNumPrey] = useState(19);
  const [rollPredator, setRollPredator] = useState(false);
  const [rollPrey, setRollPrey] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleRollPredator = () => {
    setRollPredator(true);
    if (rollPrey) {

      setShowResult(true);

      // reset
      setRollPredator(false);
      setRollPrey(false);
    }
  };

  const handleRollPrey = () => {
    setRollPrey(true);
    if (rollPredator) {
      // show result
      setShowResult(true);

      // reset
      setRollPredator(false);
      setRollPrey(false);
    }
  };


  return (
    <section id="CombatPage" className='bg-background w-full min-h-screen text-text primary-text flex flex-col'>
      <div className='w-full flex flex-col text-3xl accent-text justify-center'>
        <div className='w-full bg-accent3 p-10 h-[10em] flex flex-col justify-center items-center'>
        <Button className='w-28 mb-10' style={{ backgroundColor: '#4056a1' }} onClick={handleRollPredator}>
                {"Roll"}
          </Button>
          <D20
            number={rollNumPredator}
          />
        </div>

        <div className="bg-accent text-center py-2" style={{width: '100%'}}>
          <div className='w-full text-center flex gap-5 items-center justify-center'>
          <p className='text-lg'>P{predator}</p>
           <p className='text-lg'>P{prey}</p>
          </div>
           <p className='text-4xl'>{predatorScore} : {preyScore}</p>
        </div>
        <div className='w-full bg-secondary p-10 h-[10em] flex flex-col justify-center items-center'>
          <D20
            number={rollNumPrey}
          />
          <Button className='w-28 mt-16' style={{ backgroundColor: '#FB5A48' }} onClick={handleRollPrey}>
                                {"Roll"}
                            </Button>
        </div>
      </div>

      <Modal show={showResult} className='h-full ' size="md" onClose={() => setShowResult(false)} popup>
                <Modal.Header className='bg-background' />
                <Modal.Body className='bg-background'>
                    <div className="text-center primary-text bg-background py-5 flex justify-center flex-col items-center gap-4">

                        <p className="text-3xl accent-text uppercase text-accent">
                            P1 has won!
                        </p>

                        <div className="flex justify-center gap-4 mt-4">
                            <Button onClick={() => setShowResult(false)} className='w-28' style={{ backgroundColor: '#4056a1' }}>
                                {"Okay!"}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
    </section>
  )
}
