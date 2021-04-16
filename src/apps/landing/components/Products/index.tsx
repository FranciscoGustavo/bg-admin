import { FC } from 'react';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useStyles } from './styles';

const pictures = ['/img/fruit-1.png', '/img/fruit-2.png', '/img/fruit-3.png'];

const Products: FC = () => {
  const {
    SRoot,
    STitleSubtitle,
    SContainerCarrusel,
    SContainerInfo,
    SContainerHexagon,
    SCarrusel,
    SHexagon,
    SHexagonText,
  } = useStyles();
  return (
    <Box className={SRoot}>
      <Container>
        <Box className={STitleSubtitle}>
          <Typography variant="h2">We are Organics</Typography>
          <Typography variant="body1">Frash from the farm</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={6} className={SContainerCarrusel}>
            <IconButton>
              <KeyboardArrowUpIcon />
            </IconButton>
            <Box className={SCarrusel}>
              <img src={pictures[1]} alt="" width="100%" />
            </Box>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            {[1, 2, 3, 4].map(() => (
              <Box className={SContainerInfo}>
                <Box className={SContainerHexagon}>
                  <Box className={SHexagon}>logo</Box>
                </Box>
                <p className={SHexagonText}>100% Natural</p>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
