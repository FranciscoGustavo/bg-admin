import { FC, ReactNode, useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { useStyles } from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.SLayoutRoot}>
      <Header onMobileNavOpen={() => setMobileNavOpen(true)} />
      <Sidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.SLayoutWrapper}>
        <div className={classes.SLayoutContainer}>
          <div className={classes.SLayoutContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
