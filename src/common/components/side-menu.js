import React from 'react';

// React Router
import { Link } from 'react-router-dom';

// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Toolbar, Box, ListItemIcon } from '@mui/material';


const MENU = [
  {
    category: "露營",
    subMenu: [
      {
        title: "重量計算機",
        path: "/camp/weight-calculator",
        icon: <i className="fas fa-weight"></i>
      },
      {
        title: "食咩好",
        path: "/camp/eat",
        icon: <i className="fas fa-utensils"></i>

      }
    ]
  },
  {
    category: "生活常用",
    subMenu: [
      {
        title: "拆數機",
        path: "/daily/pay-calculator",
        icon: <i className="fas fa-calculator"></i>

      }
    ]
  }
]

const SideMenu = (props) => {
  return (
    <Box sx={{ height: '100vh', bgcolor: 'grey.50' }}>
      <Toolbar>
        老納的工具箱
      </Toolbar>
      <List>
        {
          MENU.map((cat) => {
            return (
              <div key={cat.category}>
                <h6 style={{ marginLeft: '1rem', marginTop: '0.3rem', fontWeight: 'bold' }}>{cat.category}</h6>
                {
                  cat.subMenu.map((subMenu) => {
                    return <MenuButton key={subMenu.title} { ...subMenu } />
                  })
                }
              </div>
            )
          })
        }
      </List>
    </Box>
  )
}

const MenuButton = (props) => {
  return (
    <Link to={props.path}>
      <ListItem button key={props.title}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.title} />
      </ListItem>
    </Link>
  )
}

export default SideMenu;