import { FC, useState } from 'react';
import { Header, Hero, Offer, Products, Sidebar } from '@landing/components';
import { useStyles } from './styles';

const Home: FC = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <Header onMobileNavOpen={() => setMobileNavOpen(true)} />
      <Sidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.SLayoutWrapper}>
        <div className={classes.SLayoutContainer}>
          <div className={classes.SLayoutContent}>
            <Hero />
            <Offer />
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
