import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  SRoot: {
    paddingTop: theme.spacing(28),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(22),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(16),
    },
  },
  STitleSubtitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      marginBottom: theme.spacing(3),
    },
  },
  SContainerCarrusel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
  },
  SCarrusel: {
    '& > img': {
      width: '100%',
      maxWidth: '350px',
    },
  },
  SContainerInfo: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '350px',
    height: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: '0',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  SContainerHexagon: {
    position: 'absolute',
    filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2))',
  },
  SHexagon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90px',
    height: '100px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  },
  SHexagonText: {
    display: 'flex',
    width: '100%',
    borderRadius: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: '40%',
    paddingRight: theme.spacing(1),
    backgroundColor: '#fff',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));
