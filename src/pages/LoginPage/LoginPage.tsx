import { User } from '../../models/User';
import { baseUrl } from '../../constants';
import { logIn } from '../../store/currentUser.slice';
import { setValueInLocalStorage } from '../../services/localStorage.service';
import { useDispatch } from 'react-redux';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const imitateLogin = () => {
    fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        username: 'example2@mail.com',
        password: '1234',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setValueInLocalStorage('authToken', data.access_token);
        const user: User = {
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
        };
        dispatch(logIn({ user: user }));
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
        <button>Log in</button>
      </form>
      <button type="button" onClick={imitateLogin}>Imitate log in</button>
    </div>
  );
};
