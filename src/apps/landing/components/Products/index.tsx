import { FC, useState } from 'react';
import Image from 'next/image';
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

const carousel = ['/img/fruit-1.png', '/img/fruit-2.png', '/img/fruit-3.png'];
const features = [
  {
    uid: 1,
    title: '100 % Natural',
    image: '/img/apple.png',
  },
  {
    uid: 2,
    title: 'Super Healthy',
    image: '/img/broccoli.png',
  },
  {
    uid: 3,
    title: 'Premium Quality',
    image: '/img/strawberry.png',
  },
  {
    uid: 4,
    title: 'Fresh Goods',
    image: '/img/olive.png',
  },
];

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
  const [currentImage, setCurrentImage] = useState(0);

  const onGoBackImage = () => {
    if (currentImage === 0) {
      setCurrentImage(carousel.length - 1);
    } else {
      setCurrentImage(currentImage + -1);
    }
  };

  const onGoNextImage = () => {
    if (currentImage === carousel.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <Box className={SRoot}>
      <Container>
        <Box className={STitleSubtitle}>
          <Typography variant="h2">We are Organics</Typography>
          <Typography variant="body1">Frash from the farm</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={6} className={SContainerCarrusel}>
            <IconButton onClick={onGoBackImage}>
              <KeyboardArrowUpIcon />
            </IconButton>
            <Box className={SCarrusel}>
              <img src={carousel[currentImage]} alt="" width="100%" />
            </Box>
            <IconButton onClick={onGoNextImage}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            {features.map(({ uid, title, image }) => (
              <Box key={uid} className={SContainerInfo}>
                <Box className={SContainerHexagon}>
                  <Box className={SHexagon}>
                    <Image src={image} layout="fixed" width="50" height="50" />
                  </Box>
                </Box>
                <p className={SHexagonText}>{title}</p>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
