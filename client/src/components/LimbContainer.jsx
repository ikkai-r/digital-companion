import React, { useState } from 'react'
import Image from 'next/image'

export default function LimbContainer({limb}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        console.log('open')
      setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <div className='w-full'>
        <div className={`w-full ${limb.color} rounded-md p-3 mt-4 ${isDropdownOpen ? 'h-0 overflow-hidden hidden' : 'h-auto'}`}
             onClick={toggleDropdown}>
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
            
    </div>
  )
}
