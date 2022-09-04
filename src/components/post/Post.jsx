import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Button } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import IosShareIcon from "@mui/icons-material/IosShare";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Post = ({ post, photo, name }) => {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={photo} alt={name?.substr(0, 1).toUpperCase()} />
        <p>{name}</p>
        <Button>
          <MoreHorizIcon />
        </Button>
      </div>
      <div className="post_mid" style={{ textAlign: "left" }}>
        <p>{post}</p>
      </div>
      <div className="post_bottom">
        <Button>
          <ArrowUpwardIcon />
        </Button>
        <Button>
          <ArrowDownwardIcon />
        </Button>
        <Button>
          <CommentIcon />
        </Button>
        <Button>
          <IosShareIcon />
        </Button>
      </div>
    </div>
  );
};

export default Post;
