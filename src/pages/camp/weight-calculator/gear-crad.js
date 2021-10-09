import React from 'react';

import { Checkbox, ListItem, ListItemButton, ListItemText, ListItemIcon, IconButton, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const GearCard = ({ store, data }) => {
  const handleToggle = () => {
    if (!store.selectedGears.find(x => x.name === data.name)) {
      store.addToSelectedGear(data);
    } else {
      store.removeFromSelectedGear(data);
    }
  }

  const handleDelete = () => {
    store.removeFromGearList(data);
    store.removeFromSelectedGear(data);
  }

  return (
    <ListItem
      key={data.name}
      disablePadding
    >
      <ListItemButton onClick={handleToggle}>
        <ListItemIcon>
          <Checkbox
            edge="end"
            checked={store.isGearSelected(data)}
          />
        </ListItemIcon>
        <ListItemText>
          {data.name}
          <Chip color="warning" label={`${data.weight}g`} style={{ marginLeft: 8, marginBottom: 4, fontWeight: 'bold' }}/>
          <Chip color="secondary" label={`x ${data.qty}`} style={{ marginLeft: 4, marginBottom: 4, fontWeight: 'bold' }}/>
        </ListItemText>
      </ListItemButton>

      <IconButton aria-label="delete" onClick={handleDelete} style={{ marginRight: 8 }}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}

export default GearCard;