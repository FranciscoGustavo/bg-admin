import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { getSession, getCsrfToken } from 'next-auth/client';
import { Login } from '@admin/containers';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    };
  }
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};

type AdminSigninPageProps = {
  csrfToken: string;
};

const AdminSigninPage: FC<AdminSigninPageProps> = ({ csrfToken }) => (
  <Login csrfToken={csrfToken} />
);

export default AdminSigninPage;
