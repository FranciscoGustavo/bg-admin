import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  SRoot: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
  },
  SContainerOffer: {
    position: 'absolute',
    top: theme.spacing(-20),
    maxWidth: 'none',
    [theme.breakpoints.up('sm')]: {
      top: theme.spacing(-14),
    },
    [theme.breakpoints.up('md')]: {
      top: theme.spacing(-10),
    },
  },
  SContainerTitleOffer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  SContainerImageOffer: {
    height: '150px',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-25%',
        right: '-30px',
        display: 'block',
        width: '60px',
        height: '150%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: '#fff',
        transform: 'rotate(20deg)',
        zIndex: 1,
      },
    },
  },
  SImageOffer: {
    position: 'relative',
    width: '100%',
    height: '150px',
    '& img': {
      objectFit: 'cover',
    },
  },
  SContainerButtonOffer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  SButtonOffer: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
}));
