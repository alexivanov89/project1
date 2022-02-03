import merge from 'lodash/merge';
import { Paper } from './Paper';

export const componentsOverrides = () => {
  return merge(
    Paper(),
    // Input(),
    // Button(),
  );
};
