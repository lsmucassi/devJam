import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9 • 
    // This impressive paella is a perfect party 
    // dish and a fun meal to cook together with 
    // your guests. Add 1 cup of frozen peas along 
    // with the mussels, if you like.
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProfileCard = props => {
  const classes = useStyles();
  const { avatarSrc, title, occupation, bio, imgSrc } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" 
                // src={avatarSrc}
                className={classes.avatar}>
            {avatarSrc}
          </Avatar>
        }
        action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
        }
        title={title}
        subheader={occupation} />
      <CardMedia
        className={classes.media}
        image={imgSrc}
        title={title} />
      <CardContent>
        <Typography variant="body2" 
                color="textSecondary" component="p">
                    {bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="view profile">
        <VisibilityIcon />
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>    
      </CardActions>
      
    </Card>
  );
}

export default ProfileCard