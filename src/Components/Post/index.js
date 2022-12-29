import React from "react";
import "./post.css";
import { AiOutlineHeart, AiOutlineSend } from "react-icons/ai";

export default function Post(props) {
  return (
    <div className="post">
      <div className="postHead">{props.title}</div>
      <div className="postBody">
        <img src={props.image} />
      </div>
      <div className="postBottom">
        <AiOutlineHeart
          style={{ width: "25px", height: "25px", paddingRight: "10px" }}
        />
        <AiOutlineSend style={{ width: "25px", height: "25px" }} />
      </div>
    </div>
  );
}
