"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Modal, Select, TextInput, Label} from 'flowbite-react'
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function StatsContainer({color, playernum, str, def, spe, cha}) {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <div className={`w-full py-5 rounded-md px-3`} style={{backgroundColor: color}}>
    <div className='grid grid-cols-3 gap-2'>
    <div className='col-span-1 flex items-center w-full flex-col gap-2 mt-8'>
      <Image
          src={`/assets/P${playernum}_icon.png`}
          width={90}
          height={90}
          alt={`Player ${playernum} Icon`}
          className='rounded-full border-4 border-double border-zinc-100'
        />
        <p className='accent-text uppercase'>
          Player {playernum}
        </p>
        
    </div>
      <div className='w-full col-span-2 pl-3 accent-text uppercase text-white'>
          <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4'>
            <p>Strength</p>
            <p>{str ? str : '0'}</p>
          </div>
          

          <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4 mt-2'>
            <p>Defense</p>
            <p>{def ? def : '0'}</p>
            </div>
        

          <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4 mt-2'>
            <p>Speed</p>
            <p>{spe ? spe : '0'}</p>
            </div>
        
          
          <div className='w-full flex justify-between bg-secondary p-2 rounded-md px-4 mt-2'>
            <p>Charisma</p>
            <p>{cha ? cha : '0'}</p>
            </div>

            <Button className='accent-text w-full uppercase bg-accent2 border border-white border-2 mt-2' onClick={() => setOpenModal(true)}>Add Buff / Debuff</Button>

      </div>
    </div>
      
  </div>

   {/** Optional TODO: Center the modal in mobile */}
       
   <Modal show={openModal} className='h-full ' size="md" onClose={() => setOpenModal(false)} popup>
   <Modal.Header className='bg-text'/>
   <Modal.Body className='bg-text rounded-md'>
   <div className="text-center primary-text bg-text flex justify-center flex-col items-center gap-4">

   <div className='bg-accent w-full flex justify-center items-center flex-col p-4 rounded-md'>
       <h3 className="text-lg accent-text uppercase text-background">
        Select stat to add buff / debuff
       </h3>

       <Select className='w-48 primary-text mt-2' required>
          <option value="Strength">Strength</option>
          <option value="Defense">Defense</option>
          <option value="Speed">Speed</option>
          <option value="Charisma">Charisma</option>
       </Select>
  </div>

  <div className='bg-accent3 w-full flex justify-center items-center flex-col p-4 rounded-md'>
       <h3 className="text-lg accent-text uppercase text-background">
        Select if buff or debuff
       </h3>

       <Select className='w-48 primary-text mt-2' required>
          <option value="Buff">Buff</option>
          <option value="Debuff">Debuff</option>
       </Select>
  </div>
      
      <div className='bg-accent2 w-full flex justify-center items-center flex-col p-5 rounded-md'>
      <h3 className="text-lg accent-text uppercase text-background ">
        Input modifier number
       </h3>
        <TextInput id="small" type="number" sizing="sm" className='w-48 mt-2' />
      </div>
       
         
       <div className="flex justify-center gap-4 mt-4">
       <Button color="success" onClick={() => setOpenModal(false)}>
           {"Add it!"}
       </Button>
       <Button color="gray" onClick={() => setOpenModal(false)}>
           No, I won't add it
       </Button>
       </div>
   </div>
   </Modal.Body>
</Modal>
</>
  )
}
