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
      { label: 'Productos', to: '/products' },
      { label: 'Pedidos', to: '/orders' }
    ],
  },
  {
    uid: 'purchases',
    label: 'Compras',
    submenus: [
      { label: 'Recepcion de Mercancia', to: '/merchandise-reception' },
      { label: 'Inventario', to: '/inventory' }
    ],
  },
  {
    uid: 'users',
    label: 'Usuarios',
    submenus: [
      { label: 'Clientes', to: '/clients' },
      { label: 'Provedores', to: '/providers' },
      { label: 'Administradores', to: '/users' }
    ],
  }
]

const Navbar = () => {
  const [{ navbar }, dispatch] = useStateValue();

  const handleCheckChange = (e) => {
    const name = e.target.name; 
    dispatch(handleNavbar({ [name]: !navbar[name] }))
  }

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

  const handleRenderSubmenus = (submenus, uid) => (
    submenus && <div className="navbar__submenu">
      {
        submenus.map(({ label, to }, idx) => (
          <NavLink activeClassName="active" key={idx} to={to}>{label}</NavLink>
        ))
      }
    </div>
  );

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt=""/>
      </div>
      <nav className="navbar__nav">
        {
          NAVBAR.map(({ uid, label, to, submenus }) => (
            <div key={uid} className="navbar__menu">

              { handleRenderMenuItem(uid, label, to, submenus) }
              { handleRenderSubmenus(submenus, uid) }
              
            </div>
          ))
        }

      </nav>
    </div>
  );
}

export default Navbar; 
