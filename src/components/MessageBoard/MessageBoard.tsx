import React, { memo } from "react";
import { MessageBoardWrapper } from "./style";
import { MessageOutlined } from "@ant-design/icons";
import Comments from "../../views/Message/component/Comment";
import PostComment from "../../views/Message/sendComments/PostComments";

interface propsType {
  title: string;
  image?: string;
  text?: string[];
}
const MessageBoard = memo(({ title, text }: propsType) => {
  return (
    <MessageBoardWrapper>
      <div className="card">
        <h2 className="title">
          <span style={{ marginRight: "10px" }}>
            <MessageOutlined />
          </span>
          {title}
        </h2>
        {title == "留言板" ? (
          <div className="content">
            <Comments></Comments>
          </div>
        ) : (
          <div>
            <PostComment></PostComment>
          </div>
        )}
      </div>
    </MessageBoardWrapper>
  );
});

export default MessageBoard;
