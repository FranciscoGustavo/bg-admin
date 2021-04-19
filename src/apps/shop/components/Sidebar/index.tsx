import { FC } from 'react';
import { Hidden, Drawer } from '@material-ui/core';

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
    />
  </Hidden>
);

export default Sidebar;
