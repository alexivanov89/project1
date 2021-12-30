import { ChangeEvent, useState } from 'react';

export const useInput = (initValue: string = '') => {
  const [value, setValue] = useState(initValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return { value, onChange };
};
