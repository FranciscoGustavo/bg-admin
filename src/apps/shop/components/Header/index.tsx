import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Hidden,
  IconButton,
  InputBase,
  Box,
  Badge,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles';

type HeaderProps = {
  onMobileNavOpen: () => void;
};

const Header: FC<HeaderProps> = ({ onMobileNavOpen }) => {
  const classes = useStyles();
  return (
    <AppBar elevation={1} position="static">
      {/* <Container> */}
      <Toolbar>
        <Link href="/shop">
          <a>
            <Image
              src="/img/logo-white.png"
              layout="fixed"
              width="45"
              height="45"
              alt="vegyfresh logo"
            />
          </a>
        </Link>
        {/* <div className={classes.SSearch}>
            <div className={classes.SSearchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
        <Box style={{ flexGrow: 1 }} />
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          aria-label="account of current user"
          // aria-controls={menuId}
          aria-haspopup="true"
          // onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
};

export default Header;
