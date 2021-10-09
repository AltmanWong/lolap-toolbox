import React from 'react';
import Box from '@mui/material/Box';

const RADIUS = 0.5;

const CategoryContainer = ({ children, title }) => {
  return (
    <Box sx={{ m: 1 }}>
      <Box sx={{ p: 1, bgcolor: 'grey.300', borderRadius: `${RADIUS}rem ${RADIUS}rem 0px 0px`, fontWeight: 'bold' }}>{title}</Box>
      <Box sx={{ bgcolor: 'grey.200', borderRadius: `0px 0px ${RADIUS}rem ${RADIUS}rem` }}>
        { children }
      </Box>
    </Box>
  )
}

export default CategoryContainer;