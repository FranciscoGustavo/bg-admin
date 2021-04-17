import { FC } from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  Button,
} from '@material-ui/core';
import { useStyles } from './styles';

const Offer: FC = () => {
  const {
    SRoot,
    SContainerOffer,
    SContainerTitleOffer,
    SContainerImageOffer,
    SImageOffer,
    SContainerButtonOffer,
    SButtonOffer,
  } = useStyles();
  return (
    <Box className={SRoot}>
      <Container className={SContainerOffer}>
        <Card>
          <Grid container>
            <Grid item xs={12} sm={6} md={4} className={SContainerTitleOffer}>
              <Typography variant="body1">carrots deal of the day</Typography>
              <Typography variant="h2">Organic fuits 50% off</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={SContainerImageOffer}>
              <div className={SImageOffer}>
                <Image src="/img/offer.jpg" layout="fill" alt="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className={SContainerButtonOffer}>
              <Button
                variant="outlined"
                color="secondary"
                className={SButtonOffer}
              >
                read more
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default Offer;
