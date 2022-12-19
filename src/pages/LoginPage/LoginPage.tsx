import { useNavigate } from 'react-router';
import { baseUrl } from '../../constants';
import { saveItemInStorage } from '../../services/localStorage.service';

export const LoginPage = () => {
  const navigate = useNavigate();
  
  const emulateLogin = () => {
    const payload = {
      username: 'example@mail.com',
      password: '1234',
    };

    fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        saveItemInStorage('access_token', data.access_token);
        // dispatch(setCurrentUser(data));
        navigate('/');
      });
  };

  return (
    <div className="login-page">
      <h1>Log in</h1>
      <form>
        <label>
          <span>Username</span>
          <input type="text" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" />
        </label>
        <button>Send</button>
      </form>
      <button type="button" onClick={emulateLogin}>
        Emulate log in
      </button>
    </div>
  );
};
