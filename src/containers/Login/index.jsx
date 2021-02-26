import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginDemo = () => {
    setEmail('UserDemo');
    setPassword('UserpwSS3cr37')
    history.push('/');
  }

  return (
    <div className="login">
      <div className="login__container">
	<form>
	  <button type="button" className="login__button" onClick={handleLoginDemo}>Login Demo</button>
	</form>
      </div>
    </div>
  );
}

export default Login; 
