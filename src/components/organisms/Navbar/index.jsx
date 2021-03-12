import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useStateValue } from '../../../store/StateProvider';
import { handleNavbar } from '../../../store/actions';
import logo from '../../../assets/img/logo.png';
import './styles.css';

const NAVBAR = [
  {
    uid: 'home',
    label: 'Home',
    to: '/',
    submenus: false,
  },
  {
    uid: 'sales',
    label: 'Ventas',
    submenus: [
      { uid: 'sales-products', label: 'Productos', to: '/products' },
      { uid: 'sales-orders', label: 'Pedidos', to: '/orders' },
    ],
  },
  {
    uid: 'purchases',
    label: 'Compras',
    submenus: [
      {
        uid: 'purchases-merchandise-reception',
        label: 'Recepcion de Mercancia',
        to: '/merchandise-reception',
      },
      { uid: 'purchases-inventory', label: 'Inventario', to: '/inventory' },
    ],
  },
  {
    uid: 'users',
    label: 'Usuarios',
    submenus: [
      { uid: 'users-clients', label: 'Clientes', to: '/clients' },
      { uid: 'users-providers', label: 'Provedores', to: '/providers' },
      { uid: 'users-admins', label: 'Administradores', to: '/users' },
    ],
  },
];

const Navbar = () => {
  const [{ navbar }, dispatch] = useStateValue();

  const handleCheckChange = (e) => {
    const { name } = e.target;
    dispatch(handleNavbar({ [name]: !navbar[name] }));
  };

  const handleRenderMenuItem = (uid, label, to, submenus) => {
    if (!submenus) return <Link to={to}>{label}</Link>;

    return (
      <>
        <label htmlFor={uid}>{label}</label>
        <input
          id={uid}
          name={uid}
          type="checkbox"
          checked={navbar[uid]}
          value={navbar[uid]}
          onChange={handleCheckChange}
        />
      </>
    );
  };

  const handleRenderSubmenus = (submenus) =>
    submenus && (
      <div className="navbar__submenu">
        {submenus.map(({ uid: subUid, label, to }) => (
          <NavLink activeClassName="active" key={subUid} to={to}>
            {label}
          </NavLink>
        ))}
      </div>
    );

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="" />
      </div>
      <nav className="navbar__nav">
        {NAVBAR.map(({ uid, label, to, submenus }) => (
          <div key={uid} className="navbar__menu">
            {handleRenderMenuItem(uid, label, to, submenus)}
            {handleRenderSubmenus(submenus)}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
