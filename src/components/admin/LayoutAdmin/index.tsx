import { useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { useStyles } from './styles';

const LayoutAdmin = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const {
    DashboardLayoutRoot,
    DashboardLayoutWrapper,
    DashboardLayoutContainer,
    DashboardLayoutContent,
  } = useStyles();
  return (
    <div className={DashboardLayoutRoot}>
      <Header onMobileNavOpen={() => setMobileNavOpen(true)} />
      <Sidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={DashboardLayoutWrapper}>
        <div className={DashboardLayoutContainer}>
          <div className={DashboardLayoutContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
