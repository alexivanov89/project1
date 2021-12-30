import { useRef } from 'react';

export const useFullscreen = (callback?: Function) => {
  const element = useRef<HTMLDivElement | null>(null);

  const triggerFull = () => {
    //@ts-ignore
    !!element.current && element.current?.requestFullscreen();
    !!callback && callback();
  };

  const exitFull = () => {
    document.exitFullscreen();
    !!callback && callback();
  };

  return { element, triggerFull, exitFull };
};
