import { FC } from 'react';
import { Hidden, Drawer, Box, List } from '@material-ui/core';
import MenuItem from '../MenuItem';
import { useStyles } from './styles';
import Items from './items.json';

const ContentMenu: FC = () => {
  const { SContainer, SContainerList } = useStyles();
  return (
    <Box className={SContainer}>
      <Box className={SContainerList}>
        <List>
          {Items.map(({ uid, label, to, submenu }) => (
            <MenuItem key={uid} label={label} to={to} submenu={submenu} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

type SidebarProps = {
  openMobile: boolean;
  onMobileClose: () => void;
};

const Sidebar: FC<SidebarProps> = ({ openMobile, onMobileClose }) => (
  <>
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
        <ContentMenu />
      </Drawer>
    </Hidden>
    <Hidden mdDown>
      <Drawer
        anchor="left"
        open
        variant="persistent"
        PaperProps={{
          style: {
            width: 256,
            top: 64,
            height: 'calc(100% - 64px)',
          },
        }}
      >
        <ContentMenu />
      </Drawer>
    </Hidden>
  </>
);

export default Sidebar;
