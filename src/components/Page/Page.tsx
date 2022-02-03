import { Helmet } from 'react-helmet-async';
import { FC, forwardRef, ReactNode } from 'react';
import { Box } from '@mui/material';

interface IPage {
  children: ReactNode;
  title: string;
  restProps?: any;
}

export const Page: FC<IPage> = forwardRef(({ children, title = '', ...restProps }, ref) => (
  <Box ref={ref} {...restProps}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
));
