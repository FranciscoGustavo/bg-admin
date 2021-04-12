import { FC } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Button,
  Hidden,
  IconButton,
  Box,
  Badge,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

type HeaderProps = {
  onMobileNavOpen: () => void;
};

const Header: FC<HeaderProps> = ({ onMobileNavOpen }) => (
  <AppBar elevation={0}>
    <Toolbar>
      <Link href="/">
        <Button component="a">VegyOrders</Button>
      </Link>
      <Box style={{ flexGrow: 1 }} />
      <Hidden mdDown>
        <IconButton color="inherit">
          <Badge badgeContent={1} color="primary" variant="dot">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <InputIcon />
        </IconButton>
      </Hidden>
      <Hidden lgUp>
        <IconButton color="inherit" onClick={onMobileNavOpen}>
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
);

export default Header;
