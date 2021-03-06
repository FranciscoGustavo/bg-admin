import { FC } from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Hero: FC = () => {
  const { SRoot, SLeft, STitle, SButtonBuy } = useStyles();
  return (
    <Box className={SRoot}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={7} sm={7} md={8}>
            <Box className={SLeft}>
              <Typography className={STitle} variant="h1">
                Live <span>organic</span> for live <span>healthy</span>
              </Typography>
              <Typography variant="body1">
                Organic vegetables fruits and lot more to your door
              </Typography>
              <Button
                className={SButtonBuy}
                variant="contained"
                color="secondary"
              >
                Buy Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={5} sm={5} md={4}>
            <Image
              src="/img/orange.png"
              layout="responsive"
              width="690"
              height="492"
              alt="hero image"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
