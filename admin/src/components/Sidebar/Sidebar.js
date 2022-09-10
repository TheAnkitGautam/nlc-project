import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import SourceIcon from '@mui/icons-material/Source';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function ResponsiveDrawer({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{paddingTop:"10px"}}>
      <List>
          <Link to="/">
              <ListItem key="Content" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SourceIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Content"/>
                </ListItemButton>
              </ListItem>
          </Link>
          <Link to="/participants">
            <ListItem key="Participants" disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <GroupIcon/>
                </ListItemIcon>
                <ListItemText primary="Participants"/>
                </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/subscribers">
            <ListItem key="Subscribers" disablePadding >
                <ListItemButton>
                <ListItemIcon>
                    <GroupIcon/>
                </ListItemIcon>
                <ListItemText primary="Subscribers"/>
                </ListItemButton>
            </ListItem>
          </Link>
          
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
