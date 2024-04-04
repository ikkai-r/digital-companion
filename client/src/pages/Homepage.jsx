
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';

export default function Homepage() {

  const [selectedNumber, setSelectedNumber] = useState(null);

  const setPlayerNumber = async (number) => {
    try {
        const response = await axios.post('http://localhost:8080/api/setPlayer', { playerNumber: number });
        console.log(response.data);
        setSelectedNumber(number);
    } catch (error) {
        console.error('Error setting player number:', error);
    }
};

  return (
    <section className='bg-background flex min-h-screen w-full justify-center items-center'>
        <div className='p-8 flex flex-col gap-8'>

            <div className='w-full flex justify-center items-center'>
                <Image
                    src="/assets/logo.png"
                    width={65}
                    height={65}
                    alt="Picture of a monster limb"
                />
            </div>

            <div className='text-center flex flex-col gap-5'>
                <p className='text-accent accent-text uppercase text-4xl'>
                    Choose a player number
                </p>
                <p className='text-gray-300 primary-text text-sm'>
                    Proceed with the game by <br/> choosing a number of your choice. 
                </p>
            </div>

            <div className='w-full flex mt-5 gap-5 flex-wrap justify-center'>
                <Link href="/view" onClick={() => setPlayerNumber(1)}>
                    <div className='mt-3 bg-gradient-to-b from-accent2 accent-text rounded-lg w-36 h-40 flex justify-center items-center hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150'>
                            <p className='text-8xl font-bold text-accent2'>
                                1
                            </p>
                    </div>
                </Link>
               
               <Link href="/view" onClick={() => setPlayerNumber(2)}>
                    <div  className='mt-3 bg-gradient-to-b from-primary accent-text rounded-lg w-36 h-40 flex justify-center items-center hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150'>
                        <p className='text-8xl font-bold text-primary'>
                            2
                        </p>
                    </div>
                </Link>
                
                <Link href="/view" onClick={() => setPlayerNumber(3)}>
                    <div className='bg-gradient-to-b from-accent3 mt-3 accent-text rounded-lg w-36 h-40 flex justify-center items-center hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150'>
                        <p className='text-8xl font-bold text-accent3'>
                            3
                        </p>
                    </div>
               </Link>

               <Link href="/view" onClick={() => setPlayerNumber(4)}>
                    <div className='bg-gradient-to-b from-accent mt-3 accent-text rounded-lg w-36 h-40 flex justify-center items-center hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150'>
                        <p className='text-8xl font-bold text-accent'>
                            4
                        </p>
                    </div>
                </Link>

            </div>

        </div>
    </section>
  )
}
