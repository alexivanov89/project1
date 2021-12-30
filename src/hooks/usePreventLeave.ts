export const usePreventLeave = () => {
  const listener = (e: Event) => {
    e.preventDefault();
    //@ts-ignore
    e.returnValue = '';
  };

  const enablePrevent = () => {
    window.addEventListener('beforeunload', listener);
  };

  const disablePrevent = () => {
    window.removeEventListener('beforeunload', listener);
  };

  return { enablePrevent, disablePrevent };
};
