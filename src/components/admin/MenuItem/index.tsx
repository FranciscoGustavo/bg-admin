import { useState, FC } from 'react';
import Link from 'next/link';
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Button,
} from '@material-ui/core';
import { useStyles } from './styles';

type Submenu = {
  label: string;
  to: string;
}

type CollapseSubmenuProps = {
  submenu: Array<Submenu>;
  isOpen: boolean;
}

const CollapseSubmenu: FC<CollapseSubmenuProps> = ({ submenu, isOpen }) => {
  const { SListSubItem, SListItemButton } = useStyles();

  return (
    <Collapse in={isOpen}>
      <List disablePadding>
        {submenu.map(({ label, to }) => (
          <ListItem className={SListSubItem}>
            <Link href={to}>
              <Button className={SListItemButton} component="a">
                {label}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Collapse>
  );
};

type MenuItemProps = {
  label: string;
  to: string;
  submenu: boolean | Array<Submenu>;
}

const MenuItem: FC<MenuItemProps> = ({ label, to, submenu }) => {
  const { SListItem, SListItemButton, SListItemText } = useStyles();
  const [isOpen, handleIsOpen] = useState(false);

  if (!submenu) {
    return (
      <ListItem className={SListItem}>
        <Link href={to}>
          <Button className={SListItemButton} component="a">
            {label}
          </Button>
        </Link>
      </ListItem>
    );
  }

  return (
    <>
      <ListItem
        className={SListItemButton}
        button
        onClick={() => handleIsOpen(!isOpen)}
      >
        <ListItemText className={SListItemText}>{label}</ListItemText>
      </ListItem>
      {submenu && <CollapseSubmenu submenu={submenu as Array<Submenu>} isOpen={isOpen} />}
    </>
  );
};

export default MenuItem;
