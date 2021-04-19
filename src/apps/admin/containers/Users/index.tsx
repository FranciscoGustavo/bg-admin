import { FC } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Card,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from '@material-ui/core';
import { LayoutAdmin, Toolbar } from '@admin/components';
import { useGetUsers } from '@admin/hooks';
import { useStyles } from './styles';

type UsersProps = {
  typeRole: string;
  labelToolbar: string;
};

const Users: FC<UsersProps> = ({ typeRole, labelToolbar }) => {
  const { Scontainer, SGridContainer } = useStyles();
  const { data, loading, error } = useGetUsers(typeRole);

  if (error)
    return (
      <LayoutAdmin>
        <div>ERROR</div>
      </LayoutAdmin>
    );
  if (loading)
    return (
      <LayoutAdmin>
        <div>Cargando</div>
      </LayoutAdmin>
    );
  return (
    <LayoutAdmin>
      <Box className={Scontainer}>
        <Container className={SGridContainer}>
          <Toolbar
            label={`Agregar ${labelToolbar}`}
            hrefAdd={`/admin/${typeRole}s/new`}
          />
          <Box>
            <Card>
              <Box>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Code</TableCell>
                      <TableCell>Correo</TableCell>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Activo</TableCell>
                      <TableCell>Actualizado</TableCell>
                      <TableCell>Creado</TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.map(
                      ({
                        id,
                        code,
                        username,
                        name,
                        isActive,
                        updatedAt,
                        createdAt,
                      }) => (
                        <TableRow key={id} hover>
                          <TableCell>{code}</TableCell>
                          <TableCell>{username}</TableCell>
                          <TableCell>{name}</TableCell>
                          <TableCell>
                            <Chip
                              label={isActive ? 'Activo' : 'Desactivado'}
                              color="primary"
                              variant="outlined"
                            />
                          </TableCell>
                          <TableCell>{updatedAt}</TableCell>
                          <TableCell>{createdAt}</TableCell>
                          <TableCell>
                            <Link href={`/admin/${typeRole}s/${id}`}>
                              <Button component="a" color="primary">
                                Más detalles
                              </Button>
                            </Link>
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>
    </LayoutAdmin>
  );
};

export default Users;
