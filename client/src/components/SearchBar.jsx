"use client"

import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [showDiv, setShowDiv] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    
    // Check if input value is not empty to show the div
    if (e.target.value.trim() !== '') {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  };

  return (
    <>
        <Paper 
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', backgroundColor: '#4056a1' }}
      className='bg-[#4056a1]'
    >
<input className="block border-none w-full disabled:cursor-not-allowed disabled:opacity-50 placeholder-gray-300 text-white primary-text p-2.5 text-sm rounded-lg" 
        type="text" 
        style={{backgroundColor: 'rgb(64, 86, 161)'}} 
        placeholder="Add limb"
        value={inputValue}
        onChange={handleChange}/>      
<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{color: '#F4B324'}}/>
      </IconButton>
    </Paper>

    <div 
      className={`${showDiv ? "max-h-32" : "max-h-0 invisible"} w-full overflow-y-auto h-auto bg-gray-200 text-base text-background primary-text mt-1 rounded-md transition-all duration-500 ease-in-out overflow-hidden`}>
       <div className=' primary-text py-1.5 p-1 px-2 hover:bg-gray-300'>
         Mermaid Tail
       </div>
       <div className=' primary-text py-1.5 p-1 px-2 hover:bg-gray-300'>
         Mermaid Tail
       </div>
    </div>

    
    </>
  )
}
