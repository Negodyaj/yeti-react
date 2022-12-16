import './RegisterPage.scss';
import * as yup from 'yup';
import { FormElement } from '../../components/FormElement/FormElement';
import { SubmitHandler, useForm } from 'react-hook-form';
import { baseUrl } from '../../constants';
import { yupResolver } from '@hookform/resolvers/yup';

interface IRegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const schema = yup
  .object({
    firstName: yup
      .string()
      .required('You must enter your name')
      .min(2, 'Name must have 2 characters at least')
      .max(30, 'Name must be at most 30 characters'),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8, 'Password must have 8 characters at least'),
    repeatPassword: yup
      .string()
      .required()
      .min(8, 'Password must have 8 characters at least')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IRegisterFormData> = (data) => {
    fetch(`${baseUrl}/users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="narrow-container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormElement
          label="First Name"
          name={'firstName'}
          register={register}
          message={errors.firstName?.message}
        />
        <FormElement
          label="Last Name"
          name={'lastName'}
          register={register}
          message={errors.lastName?.message}
        />
        <FormElement label="Email" name={'email'} register={register} message={errors.email?.message} />
        <FormElement
          label="Password"
          name={'password'}
          register={register}
          message={errors.password?.message}
          type="password"
        />
        <FormElement
          label="Repeat Password"
          name={'repeatPassword'}
          register={register}
          message={errors.repeatPassword?.message}
          type="password"
        />
        <button className="form-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
