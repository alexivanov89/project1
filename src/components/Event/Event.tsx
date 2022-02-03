import { Box } from '@mui/material';
import React, { FC } from 'react';
import { Page } from '../Page/Page';
import { Scrollbar } from '../Scrollbar/Scrollbar';

const Event: FC = () => {
  return (
    <Page title="Project1 | Event Title">
      <Box>
        <Scrollbar>
          <Box sx={{ width: '110%' }}>
            <div>Event</div>
          </Box>
        </Scrollbar>
      </Box>
    </Page>
  );
};

export default Event;
