import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  SRoot: {
    height: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
  },
  SContainerForm: {
    justifyContent: 'center',
  },
  SSubmitBtnSpan: {
    position: 'relative',
  },
  SButtonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export const useStylesPicture = makeStyles(() => ({
  SCardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  SAvatar: {
    width: '100%',
    height: '100%',
    maxWidth: '200px',
    maxHeight: '200px',
  },
  SLabel: {
    width: '100%',
  },
}));
