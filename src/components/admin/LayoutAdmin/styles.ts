import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  DashboardLayoutRoot: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
  },
  DashboardLayoutWrapper: {
    display: 'flex',
    flex: '1 1 auto',
    width: '100%',
    height: '100%',
    paddingTop: 64,
    overflow: 'hidden',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  DashboardLayoutContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  DashboardLayoutContent: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
}));
