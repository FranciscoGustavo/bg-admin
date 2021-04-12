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
import dayjs from 'dayjs';
import { LayoutAdmin, Toolbar } from '@admin/components';
import { useGetProducts } from '@admin/hooks';
import { useStyles } from './styles';

const Products: FC = () => {
  const { Scontainer, SGridContainer } = useStyles();
  const { data, loading, error } = useGetProducts();

  if (error) return <div>ERROR</div>;
  if (loading) return <div>Cargando</div>;
  return (
    <LayoutAdmin>
      <Box className={Scontainer}>
        <Container className={SGridContainer}>
          <Toolbar label="Agregar producto" hrefAdd="/admin/products/new" />
          <Box>
            <Card>
              <Box>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Code</TableCell>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Unidad</TableCell>
                      <TableCell>Activo</TableCell>
                      <TableCell>Actualizado</TableCell>
                      <TableCell>Creado</TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map(
                      ({
                        id,
                        code,
                        name,
                        unity,
                        isActive,
                        updatedAt,
                        createdAt,
                      }) => (
                        <TableRow key={id} hover>
                          <TableCell>{code}</TableCell>
                          <TableCell>{name}</TableCell>
                          <TableCell>{unity}</TableCell>
                          <TableCell>
                            <Chip
                              label={isActive ? 'Activo' : 'Desactivado'}
                              color="primary"
                              variant="outlined"
                            />
                          </TableCell>
                          <TableCell>
                            {dayjs(updatedAt).format('YY-MM-DD')}
                          </TableCell>
                          <TableCell>
                            {dayjs(createdAt).format('YY-MM-DD')}
                          </TableCell>
                          <TableCell>
                            <Link href={`/admin/products/${id}`}>
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

export default Products;
