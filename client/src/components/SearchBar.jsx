import React from 'react'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <>
        <Paper 
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', backgroundColor: '#4056a1' }}
      className='bg-[#4056a1]'
    >
<input className="block border-none w-full disabled:cursor-not-allowed disabled:opacity-50 placeholder-gray-300 text-white primary-text p-2.5 text-sm rounded-lg" type="text" style={{backgroundColor: 'rgb(64, 86, 161)'}} placeholder="Add limb"/>      
<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{color: '#F4B324'}}/>
      </IconButton>
    </Paper>

    <div className='w-full max-h-32 overflow-y-auto h-auto bg-gray-200 text-base text-background primary-text'>
       <div className=' primary-text pt-3 p-1 px-2 hover:bg-gray-300'>
         Mermaid Tail
       </div>
       <div className='primary-text p-1 px-2  hover:bg-gray-300'>
         Octopus Arm
       </div>
       <div className='primary-text p-1 px-2  hover:bg-gray-300'>
         Octopus Arm
       </div>
       <div className='primary-text p-1 px-2  hover:bg-gray-300'>
         Octopus Arm
       </div>
    </div>
    </>
  )
}
