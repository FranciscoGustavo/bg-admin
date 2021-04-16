import { FC, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  TextField,
  FormControlLabel,
  Switch,
  Button,
  Avatar,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { Formik } from 'formik';
import { LayoutAdmin } from '@admin/components';
import { useGetUser } from '@admin/hooks';
import { useStyles, useStylesPicture } from './styles';

type UserPictureProps = {
  defaultSrc: string;
  name: string;
  username: string;
};

const UserPicture: FC<UserPictureProps> = ({ defaultSrc, name, username }) => {
  const { SCardContent, SAvatar, SLabel } = useStylesPicture();
  const defaultCover = '/default-avatar.svg';
  const [cover] = useState(defaultSrc || defaultCover);

  const onUploadImage = (_event) => {
    // const file = _event.target.files[0];
  };

  return (
    <Card>
      <CardContent className={SCardContent}>
        <Avatar className={SAvatar} src={cover}>
          H
        </Avatar>
        <Typography color="textPrimary" gutterBottom variant="h3">
          {name}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          {username}
        </Typography>
      </CardContent>
      <CardActions>
        <input
          id="contained-button-cover"
          type="file"
          accept="image/*"
          onChange={onUploadImage}
          hidden
        />
        <label htmlFor="contained-button-cover" className={SLabel}>
          <Button component="span" color="primary" variant="text" fullWidth>
            Subir foto
          </Button>
        </label>
      </CardActions>
    </Card>
  );
};

type UserProps = {
  typeRole: string;
};

const User: FC<UserProps> = ({ typeRole }) => {
  const {
    SRoot,
    SContainerForm,
    SSubmitBtnSpan,
    SButtonProgress,
  } = useStyles();
  const { data, loading, error } = useGetUser(typeRole);

  const onSubmit = (values, { setSubmitting }) => {
    const { code, id, isActive, name, password, username } = values;
    console.log({ code, id, isActive, name, password, username });

    setTimeout(() => setSubmitting(false), 2000);
  };

  if (error) return <div>ERROR</div>;
  if (loading) return <div>Cargando</div>;
  return (
    <LayoutAdmin>
      <Box className={SRoot}>
        <Container maxWidth="lg">
          <Grid container className={SContainerForm} spacing={3}>
            <Formik
              initialValues={data}
              validate={() => {}}
              onSubmit={onSubmit}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values,
              }) => (
                <>
                  <Grid item lg={4} md={6} xs={12}>
                    <UserPicture
                      defaultSrc={data.cover}
                      name={values.name}
                      username={values.username}
                    />
                  </Grid>
                  <Grid item lg={8} md={6} xs={12}>
                    <form onSubmit={handleSubmit}>
                      <Card>
                        <CardHeader title="Recurso" />
                        <Divider />
                        <CardContent>
                          <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                              <TextField
                                error={Boolean(touched.code && errors.code)}
                                fullWidth
                                helperText={touched.code && errors.code}
                                label="Codigo"
                                margin="normal"
                                name="code"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.code}
                                variant="outlined"
                              />
                            </Grid>

                            <Grid item md={6} xs={12}>
                              <TextField
                                error={Boolean(
                                  touched.username && errors.username
                                )}
                                fullWidth
                                helperText={touched.username && errors.username}
                                label="Correo"
                                margin="normal"
                                name="username"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.username}
                                variant="outlined"
                              />
                            </Grid>

                            <Grid item md={6} xs={12}>
                              <TextField
                                error={Boolean(touched.name && errors.name)}
                                fullWidth
                                helperText={touched.name && errors.name}
                                label="Nombre"
                                margin="normal"
                                name="name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                variant="outlined"
                              />
                            </Grid>

                            <Grid item md={6} xs={12}>
                              <TextField
                                error={Boolean(
                                  touched.password && errors.password
                                )}
                                fullWidth
                                helperText={touched.password && errors.password}
                                label="Contraseña"
                                margin="normal"
                                type="password"
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                variant="outlined"
                              />
                            </Grid>

                            <Grid item md={8} xs={12}>
                              <FormControlLabel
                                control={
                                  <Switch
                                    checked={values.isActive}
                                    onChange={handleChange}
                                    name="isActive"
                                  />
                                }
                                label="Esta activo"
                              />
                            </Grid>
                          </Grid>
                        </CardContent>
                        <Divider />
                        <CardActions>
                          <Button>Cancelar</Button>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                          >
                            <span className={SSubmitBtnSpan}>
                              <span>Guardar</span>
                              {isSubmitting && (
                                <CircularProgress
                                  size={24}
                                  className={SButtonProgress}
                                />
                              )}
                            </span>
                          </Button>
                        </CardActions>
                      </Card>
                    </form>
                  </Grid>
                </>
              )}
            </Formik>
          </Grid>
        </Container>
      </Box>
    </LayoutAdmin>
  );
};

export default User;
