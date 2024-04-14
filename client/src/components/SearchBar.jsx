"use client"

import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'next/navigation'

export default function SearchBar({fetchLimbData, fetchStatsData}) {
  const [inputValue, setInputValue] = useState('');
  const [showDiv, setShowDiv] = useState(false);
  const [limbs, setLimbs] = useState([]);
  const searchParams = useSearchParams()
  const playerNum = searchParams?.get('player') ?? '';

  const handleChange = (e) => {
    setInputValue(e.target.value);

    // Check if input value is not empty to show the div
    fetchData(e);
  };

  async function fetchData(e) {
    try {
      if (e.target.value.trim() !== '') {
        const API_URL = process.env.NEXT_PUBLIC_BACKEND;
        const response = await fetch(`${API_URL}/api/search_part/${e.target.value.trim()}`, {cache: 'no-store'});
        const data = await response.json();
        setLimbs(data);
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleClick = async (code) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_BACKEND;
      const response = await fetch(`${API_URL}/api/add/${playerNum}/${code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        cache: 'no-store'
      });
  
      if (response.status === 200) {
        fetchLimbData();
        fetchStatsData();
      } else {
        console.error('Error:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', backgroundColor: '#4056a1' }}
        className='bg-[#4056a1]'
      >
        <input className="block border-none w-full disabled:cursor-not-allowed disabled:opacity-50 placeholder-gray-300 text-white primary-text p-2.5 text-lg font-bold rounded-lg"
          type="text"
          style={{ backgroundColor: 'rgb(64, 86, 161)' }}
          placeholder="Add Limb!"
          value={inputValue}
          onChange={handleChange} />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon sx={{ color: '#ffffff' }} />
        </IconButton>
      </Paper>

      <div
        className={`${showDiv ? "max-h-32" : "max-h-0 invisible"} w-full overflow-y-auto h-auto bg-gray-200 text-base text-background primary-text mt-1 rounded-md transition-all duration-500 ease-in-out overflow-hidden`}>
        {limbs.map((limb,index) => (
          <div key={index} onClick={() => handleClick(limb.id)} className=' primary-text py-1.5 p-1 px-2 hover:bg-gray-300'>
            {limb.name}
          </div>
        ))}


      </div>


    </>
  )
}
