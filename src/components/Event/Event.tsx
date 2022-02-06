import { Box, Button } from '@mui/material';
import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setError } from '../../store/slices/ErrorSlice';
import { fetchPeople } from '../../types/person';
import { Page } from '../Page/Page';
import { Scrollbar } from '../Scrollbar/Scrollbar';

const Event: FC = () => {
  const error = useAppSelector((state) => state.error.value);
  const dispatch = useAppDispatch();
  const res = fetchPeople('/api/people');
  console.log(res);

  return (
    <Page title="Project1 | Event Title">
      <Box>
        <Scrollbar>
          <Box sx={{ width: '110%' }}>
            <div>Event{`${error}`}</div>
            <Button onClick={() => dispatch(setError('test'))}>click</Button>
          </Box>
        </Scrollbar>
      </Box>
    </Page>
  );
};

export default Event;
