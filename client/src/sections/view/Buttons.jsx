"use client"

import React, { useState } from 'react'
import { Modal, Button } from 'flowbite-react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Buttons() {
    const [openModal, setOpenModal] = useState(false);
    const [combatModal, setCombatModal] = useState(false);
    const [prey, setPrey] = useState(null);
    const searchParams = useSearchParams()
    const playerNum = searchParams.get('player')
    let otherPlayerNumbers = [1, 2, 3, 4];
    otherPlayerNumbers = otherPlayerNumbers.filter(num => num !== parseInt(playerNum, 10));
    let move = 5;
    const handleEnemyClick = (player) => {
        if (prey === player) {
          setPrey(null);
        } else {
          setPrey(player);
        }
      };
    
    
    return (
        <>
            <div className='w-full flex gap-2 justify-center mt-5'>
                <button className='bg-accent2 rounded-md border-none accent-text text-background text-2xl p-2 w-full hover:bg-primary' onClick={() => setOpenModal(true)}> <p>MOVE</p></button>
                <button className='bg-accent rounded-md border-none accent-text text-background text-2xl p-2 w-full hover:bg-primary'> <p>EVENT</p></button>
                <button className='bg-red-500 rounded-md border-none accent-text text-background text-2xl p-2 w-full hover:bg-primary' onClick={() => setCombatModal(true)}> <p>COMBAT</p></button>
            </div>

            <Modal show={openModal} className='h-full ' size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header className='bg-background' />
                <Modal.Body className='bg-background'>
                    <div className="text-center primary-text bg-background flex justify-center flex-col items-center gap-4">


                        <p className="text-2xl accent-text uppercase text-accent">
                            You can move
                        </p>

                        <p className="text-7xl text-background p-2 rounded px-5 bg-primary accent-text">
                            {move}
                        </p>

                        <p className="text-2xl accent-text uppercase text-accent">
                            tiles
                        </p>




                        <div className="flex justify-center gap-4 mt-4">
                            <Button onClick={() => setOpenModal(false)} className='w-28' style={{ backgroundColor: '#4056a1' }}>
                                {"Okay!"}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={combatModal} className='h-full ' size="md" onClose={() => setCombatModal(false)} popup>
                <Modal.Header className='bg-background' />
                <Modal.Body className='bg-background'>
                <div className='w-full flex flex-col text-center items-center text-3xl accent-text justify-center'>
                        <p className='uppercase text-4xl text-accent mt-2'>Pick your enemy</p>
                        <div className='w-full mt-5'>

                        {otherPlayerNumbers.map((player) => (
                            <div id={player} key={player} onClick={() => handleEnemyClick(player)}  className={`my-4 flex items-center gap-7 bg-secondary text-text p-2 rounded-md pl-8 py-4 hover:bg-blue-900 ${prey === player ? 'border border-4 border-zinc-100' : ''}`}>
                            <Image
                              src={`/assets/P${player}_icon.png`}
                              width={90}
                              height={90}
                              alt={`Player ${player} Icon`}
                              className='rounded-full border-4 border-double border-zinc-100'
                            />
                            <p>Player {player}</p>
                          </div>
                        ))}

                        </div>
   

                        <div className="flex justify-center gap-4 mt-4">
                            <Link href={`/combat?ptor=${playerNum}&prey=${prey}`}>
                                <Button className={`w-36 text-3xl ${prey === null ? 'hidden' : ''}`} size="4xl" style={{ backgroundColor: '#FB5A48' }}>
                                    {"FIGHT!"}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
