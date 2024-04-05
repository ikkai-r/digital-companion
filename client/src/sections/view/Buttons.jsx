"use client"

import React, { useState } from 'react'
import { Modal, Button } from 'flowbite-react'
import { useSearchParams } from 'next/navigation'

export default function Buttons() {
    const [openModal, setOpenModal] = useState(false);
    const searchParams = useSearchParams()
    const playerNum = searchParams.get('player')
    let move = 5;
    
    return (
        <>
            <div className='w-full flex gap-2 justify-center mt-5'>
                <button className='bg-accent2 rounded-md border-none accent-text text-background text-2xl p-2 w-full hover:bg-primary' onClick={() => setOpenModal(true)}> <p>MOVE</p></button>
                <button className='bg-accent rounded-md border-none accent-text text-background text-2xl p-2 w-full hover:bg-primary'> <p>EVENT</p></button>
                <button className='bg-red-500 rounded-md border-none accent-text text-background text-2xl p-2 w-full hover:bg-primary'> <p>COMBAT</p></button>
            </div>

            <Modal show={openModal} className='h-full ' size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header className='bg-text' />
                <Modal.Body className='bg-text rounded-md'>
                    <div className="text-center primary-text bg-text flex justify-center flex-col items-center gap-4">


                        <p className="text-2xl accent-text uppercase text-background">
                            You can move
                        </p>

                        <p className="text-7xl text-background p-2 rounded px-5 bg-accent accent-text">
                            {move}
                        </p>

                        <p className="text-2xl accent-text uppercase text-background">
                            tiles
                        </p>




                        <div className="flex justify-center gap-4 mt-4">
                            <Button onClick={() => setOpenModal(false)} className='w-28' style={{ backgroundColor: '#05A895' }}>
                                {"Okay!"}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
