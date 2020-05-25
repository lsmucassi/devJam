import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ViewSingle() {
  const classes = useStyles();

    return (
        <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
        </div>
    )
}

export default ViewSingle
