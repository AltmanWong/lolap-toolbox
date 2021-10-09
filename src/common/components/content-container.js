import React from 'react';

import Box from '@mui/material/Box';

const BORDER_RADIUS = 4;

const ContentContainer = (props) => {
  return <Box sx={{ height: '97vh', bgcolor: 'white', borderRadius: BORDER_RADIUS, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
    <Box sx={{ bgcolor: 'warning.light', borderRadius: `${BORDER_RADIUS}px ${BORDER_RADIUS}px 0px 0px`, padding: '0.2rem' }}>
      <span style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem', color: 'white' }}>{props.title}</span>
    </Box>
    { props.children }
  </Box>
}

export default ContentContainer;