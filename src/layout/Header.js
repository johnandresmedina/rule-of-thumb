import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Sidebar from './Sidebar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const toggleSidebar = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(isOpen => !isOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Base App
          </Typography>
          <div>
            <Button color='inherit' variant='outlined' onClick={handleClick}>
              Options
            </Button>
            <Menu
              id='simple-menu'
              elevation={3}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem component={RouterLink} onClick={handleClose} to='/'>
                Home
              </MenuItem>
              <MenuItem component={RouterLink} onClick={handleClose} to='/about'>
                About
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
