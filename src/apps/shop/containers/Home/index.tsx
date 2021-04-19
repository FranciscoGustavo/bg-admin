import { FC } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import { Layout } from '@shop/components';

const useStyles = makeStyles(() => ({
  SMedia: {
    height: 150,
  },
  SActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Home: FC = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box>
        <Container>
          <Typography>Descuento en brotes</Typography>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            {Array(6)
              .fill(1)
              .map((n, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      className={classes.SMedia}
                      image="/img/fruit-1.png"
                    />
                    <CardContent>
                      <Box>
                        <Typography variant="body1">
                          Papa blanca grande
                        </Typography>
                      </Box>
                      <Box>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </Box>
                    </CardContent>
                    <CardActions className={classes.SActions}>
                      <Typography variant="body1">$250</Typography>
                      <Button color="primary" variant="contained">
                        Agregar al carrito
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
