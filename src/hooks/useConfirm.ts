export const useConfirm = (message: string = '', onConfirm: Function, onCancel: Function) => {
  const confirmAction = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};
