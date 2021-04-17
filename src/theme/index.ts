import { createMuiTheme } from '@material-ui/core';
import { teal, green } from '@material-ui/core/colors';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
    background: {
      default: '#F4F6F8',
    },
  },
  shadows,
  typography,
});

export default theme;
