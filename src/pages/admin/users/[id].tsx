import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { User } from '@admin/containers';

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

const AdminUserPage: FC = () => <User typeRole="user" />;

export default AdminUserPage;
