import React, { useState } from 'react'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from "react-icons/hi";



export default function LimbContainer({limb}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const handleModal = (e) => {
        e.stopPropagation();
        setOpenModal(true);
    }

  return (
    <div className='w-full flex items-center justify-center'>
        <div className={`w-full ${limb.color} rounded-md p-3 mt-4 ${isDropdownOpen ? 'h-0 overflow-hidden hidden' : 'h-auto'}`} onClick={toggleDropdown}>
            <div className='w-full text-center flex items-center'>
            <Image
                    src={`/assets/${limb.code}.png`}
                    width={90}
                    height={90}
                    alt={limb.name}
            />

            <div className='w-full'>
             <p className='text-sm accent-text uppercase'>
                        {limb.name}
                    </p>
                    <p className='text-xs'>
                    {limb.code} | {limb.race}
                    </p>
            </div>
            <MdDelete className='text-4xl' onClick={(e) => handleModal(e)}/>

            </div>
        </div>

            {isDropdownOpen && (
                <div className={`${limb.color} rounded-md p-3 mt-4 grid grid-cols-3 gap-2 transition-height duration-500 ease-in-out`}
                    onClick={toggleDropdown}>
                <div className='col-span-1 w-full text-center'>
                    <Image
                    src={`/assets/${limb.code}.png`}
                    width={90}
                    height={90}
                    alt={limb.name}
                    />
                    <p className='text-sm mt-3 accent-text uppercase'>
                        {limb.name}
                    </p>
                    <p className='text-xs'>
                    {limb.code}
                    </p>
                </div>
                <div className='col-span-2 ml-3'>
                    <div className={`w-full flex justify-between ${limb.colorbg} py-1 rounded-md px-4`}>
                    <p>STR</p>
                    <p>{limb.str}</p>
                    </div>
                    <div className={`w-full flex mt-2 justify-between ${limb.colorbg} py-1 rounded-md px-4`}>
                    <p>SPE</p>
                    <p>{limb.spe}</p>
                    </div>
                    <div className={`w-full flex mt-2 justify-between ${limb.colorbg} py-1 rounded-md px-4`}>
                    <p>DEF</p>
                    <p>{limb.def}</p>
                    </div>
                    <div className={`w-full flex mt-2 justify-between ${limb.colorbg} py-1 rounded-md px-4`}>
                    <p>CHA</p>
                    <p>{limb.cha}</p>
                    </div>
                </div>
                </div>
            )}
            
            {/** Optional TODO: Center the modal in mobile */}
       
            <Modal show={openModal} className='h-full' size="md" onClose={() => setOpenModal(false)} popup>
            <Modal.Header />
            <Modal.Body>
            <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete the {limb.name}?
                </h3>
                <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => setOpenModal(false)}>
                    {"Yes, I'm sure"}
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                    No, I want it!
                </Button>
                </div>
            </div>
            </Modal.Body>
        </Modal>
    </div>
  )
}
