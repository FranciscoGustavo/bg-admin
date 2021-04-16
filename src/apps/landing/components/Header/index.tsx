import { FC } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Box, Button } from '@material-ui/core';
import { useStyles } from './styles';

type ButtonLinkProps = {
  children: string;
  href: string;
};

const ButtonLink: FC<ButtonLinkProps> = ({ children, href }) => (
    <Link href={href}>
      <Button component="a" variant="text">
        {children}
      </Button>
    </Link>
  );

const Header: FC = () => {
  const { SContainerHeader } = useStyles();
  return (
    <AppBar elevation={0} className={SContainerHeader}>
      <Toolbar>
        <ButtonLink href="/">
          <img src="/logo.svg" alt="vegyfresh logo" width="45" height="45" />
        </ButtonLink>
        <Box style={{ flexGrow: 1 }} />
        <ButtonLink href="#">Inicio</ButtonLink>
        <ButtonLink href="#">Nosotros</ButtonLink>
        <ButtonLink href="/shop">Tienda</ButtonLink>
        <ButtonLink href="/signin">Acceder</ButtonLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
