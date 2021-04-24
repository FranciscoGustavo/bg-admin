import { FC, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Hidden,
  IconButton,
} from '@material-ui/core';
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
  const { SContainerHeader } = useStyles();
  return (
    <AppBar elevation={1} className={SContainerHeader}>
      <Toolbar>
        <Link href="/">
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
          <ButtonLink href="#">Inicio</ButtonLink>
          <ButtonLink href="#">Nosotros</ButtonLink>
          <ButtonLink href="/shop">Tienda</ButtonLink>
          <ButtonLink href="/signin">Acceder</ButtonLink>
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
