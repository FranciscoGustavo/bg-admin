import React from 'react';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { useStateValue } from '../../../store/StateProvider';
import { setUser } from '../../../store/actions';
import { auth } from '../../../firebase';
import DefaultAvatar from '../../../assets/img/default-avatar.svg';
import './styles.css';

const Header = ({ title }) => {
  const [, dispatch] = useStateValue();

  const handleClickLogout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <header className="header">
      <div className="header__left">
        <MenuOutlinedIcon />
        <h1 className="header__title">{title}</h1>
      </div>
      <div className="header__right">
        <div className="header__user">
          <img src={DefaultAvatar} alt="default avatar" />
          <div className="header__userMenuContainer">
            <div className="header__userMenu">
              <button>Perfil</button>
              <button onClick={handleClickLogout}>Salir</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
