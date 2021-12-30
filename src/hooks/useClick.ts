import { useEffect, useRef } from 'react';

export const useClick = (onClick: EventListenerOrEventListenerObject) => {
  const element = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    element.current?.addEventListener('click', onClick);
    return () => {
      element.current?.removeEventListener('click', onClick);
    };
  }, []);

  return element;
};
