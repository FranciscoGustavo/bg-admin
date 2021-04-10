import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { useStyles } from './styles';

const Login = () => {
  const { SContainer } = useStyles();
  return (
    <Box className={SContainer}>
      <Container maxWidth="sm">
        <form action="">
          <Box>
            <Typography variant="h2" >
              Inicar sesión
            </Typography>
          </Box>
          <TextField
            fullWidth
            label="Correo electronico"
            margin="normal"
            name="username"
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Contraseña"
            margin="normal"
            name="password"
            type="password"
            variant="outlined"
          />
          <Box>
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Entrar
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
