import React from 'react';

import { ListItem, ListItemText, Chip } from '@mui/material';
import CONSTANT from './weight-calculator-const';

const NameWeightPair = ({ data }) => {
  return (
    <ListItem>
      <ListItemText>
        {data.name}
        {
          data.type? <Chip color="primary" label={CONSTANT.TYPE[data.type]} style={{ marginLeft: '0.3rem', marginBottom: '0.2rem', fontWeight: 'bold' }} />: null
        }
      </ListItemText>
      
      <Chip color="warning" label={`${data.weight}g`} style={{ fontWeight: 'bold' }} />
      {
        data.qty? <Chip color="secondary" label={`x${data.qty}`} style={{ width: '4rem', marginLeft: '0.3rem', fontWeight: 'bold' }} />: null
      }
    </ListItem>
  )
}

export default NameWeightPair;