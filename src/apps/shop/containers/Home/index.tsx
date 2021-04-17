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
import { Header } from '@shop/components';

const useStyles = makeStyles((theme) => ({
  SMedia: {
    height: 200,
  },
  SContent: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  SActions: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: '0',
    paddingBottom: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box>
      <Header onMobileNavOpen={() => {}} />
      <Box>
        <Container>
          <Typography>Descuento en brotes</Typography>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid container spacing={10}>
            {Array(6)
              .fill(1)
              .map(() => (
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      className={classes.SMedia}
                      image="/img/fruit-1.png"
                    />
                    <CardContent className={classes.SContent}>
                      <Box>
                        <Typography variant="h3">Papa blanca grande</Typography>
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
    </Box>
  );
};

export default Home;
