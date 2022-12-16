import './FormElement.scss';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface IFormElementProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  message?: string;
  type?: string;
}

export const FormElement = <T extends FieldValues>(props: IFormElementProps<T>) => {
  const { label, name, register, message, type } = props;
  return (
    <>
      <label className={message ? 'form-element with-error' : 'form-element'}>
        <span>{label}</span>
        <input type={type ? type : 'text'} {...register(name)} />
      </label>
      <p className="validation-error">{message}</p>
    </>
  );
};
