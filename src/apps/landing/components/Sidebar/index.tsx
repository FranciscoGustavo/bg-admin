import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { Hidden, Drawer, Button, Box } from '@material-ui/core';

type ButtonLinkProps = {
  children: string | ReactNode;
  href: string;
};

const ButtonLink: FC<ButtonLinkProps> = ({ children, href }) => (
  <Link href={href}>
    <Button component="a" variant="text" fullWidth>
      {children}
    </Button>
  </Link>
);

type SidebarProps = {
  openMobile: boolean;
  onMobileClose: () => void;
};

const Sidebar: FC<SidebarProps> = ({ onMobileClose, openMobile }) => (
  <Hidden lgUp>
    <Drawer
      anchor="left"
      open={openMobile}
      onClose={onMobileClose}
      variant="temporary"
      PaperProps={{
        style: {
          width: 256,
        },
      }}
    >
      <Box>
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/shop">Tienda</ButtonLink>
        <ButtonLink href="/signin">Acceder</ButtonLink>
      </Box>
    </Drawer>
  </Hidden>
);

export default Sidebar;
