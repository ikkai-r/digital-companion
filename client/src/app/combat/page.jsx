"use client"

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Modal, Button } from 'flowbite-react'
import D20 from '@/components/D20'
import { useEffect } from 'react'

export default function CombatPage() {
  const searchParams = useSearchParams()
  const predator = searchParams.get('ptor')
  const prey = searchParams.get('prey')

  const [predatorScore, setPredatorScore] = useState(0);
  const [preyScore, setPreyScore] = useState(0);
  const [rollNumPredator, setRollNumPredator] = useState('?');
  const [rollNumPrey, setRollNumPrey] = useState('?');
  const [rollPredator, setRollPredator] = useState(false);
  const [rollPrey, setRollPrey] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showStat, setShowStat] = useState(true);
  const [showText, setShowText] = useState(true);
  const [showTextButton, setShowTextButton] = useState("Okay!");
  const [showSteal, setShowSteal] = useState(false);
  const [showStealResult, setShowStealResult] = useState(false);
  const [predatorPartsNum, setPredatorPartsNum] = useState('loading');
  const [preyPartsNum, setPreyPartsNum] = useState('loading');
  const [predatorStat, setPredatorStat] = useState('loading');
  const [preyStat, setPreyStat] = useState('loading');
  const [statIndex, setStatIndex] = useState('loading');

  if (statIndex === 'loading')
    setStatIndex(Math.floor(Math.random() * 4));
  const statLong = ['Strength', 'Defense', 'Speed', 'Charisma'][statIndex];
  const stat = ['str', 'def', 'spd', 'cha'][statIndex];


  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_BACKEND
    if (predatorPartsNum === 'loading') {
      fetch(`${API_URL}/view_parts/${predator}`)
        .then(response => response.json())
        .then(data => {
          setPredatorPartsNum(data.length)
        })
        .catch(error => {
          console.error('Error:', error)
        })
    }
    if (preyPartsNum === 'loading') {
      fetch(`${API_URL}/view_parts/${prey}`)
        .then(response => response.json())
        .then(data => {
          setPreyPartsNum(data.length)
        })
        .catch(error => {
          console.error('Error:', error)
        })
    }
    if (predatorStat === 'loading' || preyStat === 'loading') {
      fetch(`${API_URL}/battle/${predator}/${prey}`, {
        method: 'POST'
      })
        .then(response => response.json())
        .then(data => {
          setPredatorStat(data.predator[stat])
          setPreyStat(data.prey[stat])
        })
        .catch(error => {
          console.error('Error:', error)
        })
    }

    if (predatorScore === 3 || preyScore === 3) {
      if (predatorScore === 3) {
        setShowText(`P${predator} has won the entire battle! But will they steal a limb?`)
      } if (preyScore === 3) {
        setShowText(`P${prey} has won the entire battle! But will they steal a limb?`)
      }
      setShowTextButton("Let's see!");
    } else {
      let result
      if (rollNumPredator > rollNumPrey) {
        result = 'predator';
      } else if (rollNumPredator < rollNumPrey) {
        result = 'prey';
      } else {
        result = 'draw';
      }
      if (result === 'predator')
        setShowText(`P${predator} has won this round!`)
      else if (result === 'prey')
        setShowText(`P${prey} has won this round!`)
      else
        setShowText(`Woah! It's a draw!`)

      setShowTextButton("Okay!");
    }

    if (rollPrey && rollPredator && !showResult && !showSteal) {
      if (rollNumPredator > rollNumPrey) {
        setPredatorScore(predatorScore + 1);
      } else if (rollNumPredator < rollNumPrey) {
        setPreyScore(preyScore + 1);
      }
      setShowResult(true);
    }

    if (!rollPrey && !rollPredator && showResult) {
      setShowResult(false);
    }
  });

  const handleRollPredator = () => {
    if (!rollPredator) {
      setRollPredator(true);
      setRollNumPredator(Math.floor(Math.random() * 20) + 1 + predatorStat);
    }
  };

  const handleRollPrey = () => {
    if (!rollPrey) {
      setRollPrey(true);
      setRollNumPrey(Math.floor(Math.random() * 20) + 1 + preyStat);

    }
  };


  return (
    <section id="CombatPage" className='bg-background w-full min-h-screen text-text primary-text flex flex-col'>
      <div className='w-full flex flex-col min-h-screen text-3xl accent-text justify-center'>
        <div className='w-full bg-accent3 p-10 flex flex-col justify-center items-center' style={{ flex: '1' }}>
          <Button className='w-28 mb-10' style={{ backgroundColor: '#4056a1' }} onClick={handleRollPredator}>
            <p className='text-2xl'>{"Roll!"}</p>
          </Button>
          <D20
            number={rollNumPredator}
          />
        </div>

        <div className="bg-accent text-center w-full py-1" >
          <div className='w-full text-center flex gap-5 items-center justify-center'>
            <p className='text-lg'>P{predator}</p>
            <p className='text-lg'>P{prey}</p>
          </div>
          <p className='text-4xl'>{predatorScore} : {preyScore}</p>
        </div>

        <div className='w-full bg-secondary p-10 flex flex-col justify-center items-center' style={{ flex: '1' }}>
          <D20
            number={rollNumPrey}
          />
          <Button className='w-28 mt-16 !text-3xl' style={{ backgroundColor: '#FB5A48' }} onClick={handleRollPrey}>
            <p className='text-2xl'>{"Roll!"}</p>
          </Button>
        </div>

      </div>

      <Modal show={showResult} className='h-full ' size="md" popup>
        <Modal.Header className='bg-background' />
        <Modal.Body className='bg-background'>
          <div className="text-center primary-text bg-background py-3 flex justify-center flex-col items-center gap-4">

            <p className="text-2xl accent-text uppercase text-accent">
              {showText}
            </p>

            <div className="flex justify-center gap-4 mt-3">
              <Button onClick={() => {
                if (predatorScore == 3) {
                  const roll = Math.floor(Math.random() * 8) + 1;
                  if (roll <= preyPartsNum) {
                    setShowStealResult(`P${predator} has successfully stolen a limb! Sorry P${prey}!`)
                  } else {
                    setShowStealResult(`P${predator} has failed to steal a limb! P${prey} is safe!`)
                  }
                  setShowResult(false);
                  setShowSteal(true);
                } else if (preyScore == 3) {
                  const roll = Math.floor(Math.random() * 8) + 1;
                  if (roll <= predatorPartsNum) {
                    setShowStealResult(`P${prey} has successfully stolen a limb! Sorry P${predator}!`)
                  }
                  else {
                    setShowStealResult(`P${prey} has failed to steal a limb! P${predator} is safe!`)
                  }
                  setShowResult(false);
                  setShowSteal(true);
                } else {
                  setRollPredator(false);
                  setRollPrey(false);
                  setRollNumPredator('?');
                  setRollNumPrey('?');
                }

              }} className='w-28' style={{ backgroundColor: '#4056a1' }}>
                {showTextButton}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showStat} className='h-full ' size="md" onClose={() => setShowStat(false)} popup>
        <Modal.Header className='bg-background' />
        <Modal.Body className='bg-background'>
          {predatorStat != 'loading' && preyStat != 'loading' && predatorPartsNum != 'loading' && preyPartsNum != 'loading' &&
            <div className="text-center primary-text bg-background py-5 flex justify-center flex-col items-center gap-1">
              <p className="text-2xl accent-text text-accent mb-0">
                This battle will use...
              </p>
              <p className="text-3xl accent-text uppercase text-accent3 my-0">
                {statLong}!
              </p>
              <p className="text-2xl accent-text text-accent mt-0">
                Are you ready?
              </p>

              <div className="flex justify-center gap-4 mt-4">
                <Button onClick={() => setShowStat(false)} className='w-28' style={{ backgroundColor: '#4056a1' }}>
                  {"Let's go!"}
                </Button>
              </div>
            </div>
          }
          {!(predatorStat != 'loading' && preyStat != 'loading' && predatorPartsNum != 'loading' && preyPartsNum != 'loading') &&
            <div className="text-center primary-text bg-background py-5 flex justify-center flex-col items-center gap-1">

              <p className="text-3xl accent-text uppercase text-accent3 my-0">
                Still loading... Sit tight!
              </p>

            </div>
          }
        </Modal.Body>
      </Modal>

      <Modal show={showSteal} className='h-full ' size="md" onClose={() => window.location.href = `/view?player=${predator}`} popup>
        <Modal.Header className='bg-background' />
        <Modal.Body className='bg-background'>
          {predatorStat != 'loading' && preyStat != 'loading' && predatorPartsNum != 'loading' && preyPartsNum != 'loading' &&
            <div className="text-center primary-text bg-background py-5 flex justify-center flex-col items-center gap-1">
              <p className="text-2xl accent-text uppercase text-accent mb-0">
                {showStealResult}
              </p>

              <div className="flex justify-center gap-4 mt-4">
                <Button onClick={() => window.location.href = `/view?player=${predator}`} className='w-28' style={{ backgroundColor: '#4056a1' }}>
                  {"Go Back"}
                </Button>
              </div>
            </div>
          }
          {!(predatorStat != 'loading' && preyStat != 'loading' && predatorPartsNum != 'loading' && preyPartsNum != 'loading') &&
            <div className="text-center primary-text bg-background py-5 flex justify-center flex-col items-center gap-1">

              <p className="text-3xl accent-text uppercase text-accent3 my-0">
                Still loading... Sit tight!
              </p>

            </div>
          }
        </Modal.Body>
      </Modal>
    </section>
  )
}
