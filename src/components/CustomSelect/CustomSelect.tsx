import './CustomSelect.scss';
import React, { useState } from 'react';
import Select, { ActionMeta, StylesConfig } from 'react-select';

interface ICustomSelectProps {
  label?: string;
  options: ISelectItem[];
}

interface ISelectItem {
  value: string;
  label: string;
}

export const CustomSelect = (props: ICustomSelectProps) => {
  const { options, label } = props;
  const [selectedOption, setSelectedOption] = useState<ISelectItem | null>();

  return (
    <div className="custom-select">
      {label && <label>{label}</label>}
      <Select
        isMulti={false}
        classNamePrefix="custom-select"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        classNames={{
          option: (state) => (state.isFocused ? 'item-focused' : state.isSelected ? 'item-selected' : ''),
        }}
      />
    </div>
  );
};
