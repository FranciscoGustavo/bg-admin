import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  SListSubItem: {
    display: 'flex',
    padding: 0,
    paddingLeft: theme.spacing(1),
  },
  SListItem: {
    display: 'flex',
    padding: 0,
  },
  SListItemButton: {
    justifyContent: 'flex-start',
    width: '100%',
    borderRadius: theme.spacing(0.5),
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontWeight: 500,
    letterSpacing: 0,
    textTransform: 'none',
    '& svg': {
      mr: 1,
    },
  },
  SListItemText: {
    margin: 0,
    '& span': {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
  },
}));
