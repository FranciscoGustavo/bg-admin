import React from 'react';
import PropTypes from 'prop-types';
import { Header, Navbar } from '../../organisms';
import './styles.css';

const LayoutAdmin = ({ children, title }) => (
  <div className="layoutAdmin">
    <Header title={title} />
    <Navbar />
    {children}
  </div>
);

LayoutAdmin.defaultProps = {
  title: '',
};

LayoutAdmin.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

export default LayoutAdmin;
