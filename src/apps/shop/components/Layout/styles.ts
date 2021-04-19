import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  SLayoutRoot: {
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    overflow: 'hidden',
  },
  SLayoutWrapper: {
    width: '100%',
    height: '100%',
    paddingTop: 64,
    overflow: 'hidden',
  },
  SLayoutContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  SLayoutContent: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
}));
