import React from 'react';

// React Router
import { Link } from 'react-router-dom';

// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Toolbar } from '@mui/material';

const MENU = [
  {
    category: "露營",
    subMenu: [
      {
        title: "重量計算機",
        path: "/camp/weight-calculator"
      },
      {
        title: "食咩好",
        path: "/camp/eat"
      }
    ]
  },
  {
    category: "生活常用",
    subMenu: [
      {
        title: "拆數機",
        path: "/daily/pay-calculator"
      }
    ]
  }
]

const SideMenu = (props) => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {
          MENU.map((cat) => {
            return (
              <div>
                <h4>{cat.category}</h4>
                {
                  cat.subMenu.map((subMenu) => {
                    return <MenuButton { ...subMenu } />
                  })
                }
                <Divider />
              </div>
            )
          })
        }
      </List>
    </div>
  )
}

const MenuButton = (props) => {
  return (
    <Link to={props.path}>
      <ListItem button key={props.title}>
        <ListItemText primary={props.title} />
      </ListItem>
    </Link>
  )
}

export default SideMenu;