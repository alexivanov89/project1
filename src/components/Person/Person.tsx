import { Avatar, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC } from 'react';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: 32,
    height: 32,
  },
  person: {
    display: 'flex',
    alignItems: 'center',
  },
  fio: {
    color: '#363940',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '20px',
    padding: '0px 12px 0px 8px',
    whiteSpace: 'nowrap',
  },
}));

interface IProps {
  value: string | null;
  classes?: { icon?: string; content?: string };
}

const Person: FC<IProps> = (props) => {
  const { value, classes: restClasses } = props;
  const classes = useStyles();

  return (
    <div className={classes.person}>
      {Boolean(value) && (
        <Avatar alt={value || ''} src={'/'} className={clsx(classes.avatar, restClasses?.icon)} />
      )}
      <Typography className={clsx(classes.fio, restClasses?.content)}>{value}</Typography>
    </div>
  );
};

export default Person;
