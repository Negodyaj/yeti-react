import './CustomSelect.scss';
import React from 'react';
import Select, { SingleValue } from 'react-select';

export interface ISelectItem {
  value: number;
  label: string;
}

interface ICustomSelectProps {
  options: ISelectItem[];
  defaultValue?: ISelectItem;
  onChange: (value: ISelectItem | null) => void;
}

export const CustomSelect = (props: ICustomSelectProps) => {
  const { options, defaultValue, onChange } = props;

  // const colorStyles: StylesConfig<ISelectItem, false>  = {
  //   control: styles => ({ ...styles, backgroundColor: 'pink' }),
  //   option: (styles, { /*data, isDisabled,*/ isFocused, isSelected }) => {
  //     return {
  //       ...styles,
  //       backgroundColor: isSelected ? '#FF3F00' : isFocused ? '#ff400082' : 'white',
  //       // color: '#FFF',
  //       // cursor: isDisabled ? 'not-allowed' : 'default',
  //     };
  //   },
  // };

  const handleChange = (newValue: SingleValue<ISelectItem>) => {
    onChange(newValue);
  };

  return (
    <Select
      isMulti={false}
      options={options}
      defaultValue={defaultValue}
      onChange={handleChange}
      //styles={colorStyles}
      className="uber-select"
      classNamePrefix="super-select"
      classNames={{
        option: (state) => (state.isFocused ? 'option-focused' : state.isSelected ? 'option-selected' : ''),
      }}
    />
  );
};
