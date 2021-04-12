import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { LayoutAdmin } from '@admin/components';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

const AdminHomePage: FC = () => (
  <LayoutAdmin>
    <h1>Home</h1>
  </LayoutAdmin>
);

export default AdminHomePage;
