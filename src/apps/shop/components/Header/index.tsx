import { FC, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Badge,
  Hidden,
  Button,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';

type ButtonLinkProps = {
  children: string | ReactNode;
  href: string;
};

const ButtonLink: FC<ButtonLinkProps> = ({ children, href }) => (
  <Link href={href}>
    <Button component="a" variant="text">
      {children}
    </Button>
  </Link>
);

type HeaderProps = {
  onMobileNavOpen: () => void;
};

const Header: FC<HeaderProps> = ({ onMobileNavOpen }) => {
  const classes = useStyles();
  return (
    <AppBar elevation={1} className={classes.SRoot}>
      <Toolbar>
        <Link href="/shop">
          <a>
            <Image
              src="/img/logo.png"
              layout="fixed"
              width="45"
              height="45"
              alt="vegyfresh logo"
            />
          </a>
        </Link>
        <Box style={{ flexGrow: 1 }} />
        <Hidden mdDown>
          <IconButton aria-label="show 17 new notifications">
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
          >
            <AccountCircleIcon />
          </IconButton>
          <ButtonLink href="/shop/orders">Mis Pedidos</ButtonLink>
        </Hidden>
        <Hidden lgUp>
          <IconButton onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
