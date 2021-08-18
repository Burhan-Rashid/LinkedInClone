import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
import MainButton from "../components/MainButton";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";

const Post = forwardRef(({ title, description, message }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__top">
        <Avatar src="" />
        <div className="post__title">
          <h3>{title}</h3>
          <h5>{description}</h5>
        </div>
      </div>
      <div className="post__content">
        <p>{message}</p>
      </div>
      <div className="post__bottom">
        <MainButton icon={<AiOutlineLike size={24} />} title="Like" />
        <MainButton icon={<BiCommentDetail size={24} />} title="Comment" />
        <MainButton icon={<RiShareForwardLine size={24} />} title="Share" />
        <MainButton icon={<FiSend size={24} />} title="Send" />
      </div>
    </div>
  );
});

export default Post;
