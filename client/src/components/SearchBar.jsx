import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', backgroundColor: '#4056a1' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, backgroundColor: '#4056a1', color: '#f0f0f4'}}
        placeholder="Enter limb code"
        inputProps={{ 'aria-label': 'search limb' }}
        className='primary-text'
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{color: '#F4B324'}}/>
      </IconButton>
    </Paper>
  )
}
