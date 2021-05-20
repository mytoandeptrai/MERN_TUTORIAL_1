import {
    Avatar,
    Card,





    CardActions, CardContent, CardHeader,
    CardMedia,

    IconButton,
    Typography
} from "@material-ui/core";
import FavourteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
const Post = () => {
  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar>A</Avatar>}
          title="This is title"
          subheader="Apr 30,2021"
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia image="" title="Title" />
        <CardContent>
          <Typography variant="h5" color="textPrimary">
            This is title post
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            This is content post
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <FavourteIcon />
            <Typography component="span" color="textSecondary">
              10 likes
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
