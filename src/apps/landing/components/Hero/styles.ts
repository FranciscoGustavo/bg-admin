import { makeStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  SRoot: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(26),
    backgroundColor: '#FFF',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(20),
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(16),
    },
  },
  SLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
  },
  STitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 'normal',
    '& span': {
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  SButtonBuy: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(8),
    backgroundColor: lightGreen.A700,
    color: '#FFF',
  },
}));
