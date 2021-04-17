import { FC } from 'react';
import { GetStaticProps } from 'next';
import { Home } from '@landing/containers';

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

const HomePage: FC = () => <Home />;

export default HomePage;
