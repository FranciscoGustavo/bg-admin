import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  Scontainer: {
    height: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
  },
  SGridContainer: {
    display: 'Grid',
    gridTemplateRows: '36px 1fr',
    gap: theme.spacing(3),
    height: '100%',
  },
}));
