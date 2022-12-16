import './RegisterPage.scss';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { baseUrl } from '../../constants';
import { yupResolver } from '@hookform/resolvers/yup';

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const schema = yup
  .object({
    firstName: yup.string().required().min(2),
    lastName: yup.string().required().min(2),
    email: yup.string().required().min(5),
    password: yup.string().required().min(8, 'your password must contain at least 8 characters'),
    repeatPassword: yup
      .string()
      .required()
      .min(8, 'your password must contain at least 8 characters')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    fetch(`${baseUrl}/users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((userId) => alert(userId));
  };

  return (
    <div className="narrow-container">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <label className={errors.firstName?.message ? 'form-item with-error' : 'form-item'}>
          <span>First Name</span>
          <input type="text" {...register('firstName')} />
        </label>
        <p className="validation-error">{errors.firstName?.message}</p>
        <label className="form-item">
          <span>Last Name</span>
          <input type="text" {...register('lastName')} />
        </label>
        <label className="form-item">
          <span>Email</span>
          <input type="text" {...register('email')} />
        </label>
        <label className="form-item">
          <span>Password</span>
          <input type="password" {...register('password')} />
        </label>
        <label className="form-item">
          <span>Repeat Password</span>
          <input type="password" {...register('repeatPassword')} />
        </label>
        <p className="validation-error">{errors.repeatPassword?.message}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
