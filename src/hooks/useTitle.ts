import { useEffect, useState } from 'react';

export const useTitle = (initTitle: string = '') => {
  const [title, setTitle] = useState(initTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle!.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};
