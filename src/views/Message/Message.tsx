import React, { memo } from "react";
import MessageBoard from "../../components/MessageBoard/MessageBoard";
import PostComment from "./sendComments/PostComments";

const Message = memo(() => {
  const text: string = `大大请问一下我在发布文章的时候显示‘发布失败。 您可能已经掉线。’，这个该怎么解决啊(´இ皿இ｀)，程序是没问题的，主题是argon，github下载的`;
  const messageList: string[] = [];
  messageList.push(text);

  return (
    <div>
      <MessageBoard title="留言板" text={messageList}></MessageBoard>
      <MessageBoard title="发表评论"></MessageBoard>
    </div>
  );
});

export default Message;
