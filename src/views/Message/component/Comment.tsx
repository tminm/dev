import React, { useState, useEffect } from "react";
// import axios from "axios";
import { response } from "../mock/data";
import { CommentsWrapper } from "./style";

// 定义评论类型
interface Comment {
  id: number;
  avatar: string;
  nickname: string;
  content: string;
  time: string;
  ip: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  // 获取评论数据的函数
  const fetchComments = async () => {
    try {
      //   const response = await axios.get("/api/comments"); // 模拟请求后台数据
      setComments(response.data);
    } catch (error) {
      console.error("Failed to fetch comments", error);
    }
  };

  useEffect(() => {
    fetchComments(); // 页面加载时获取评论数据
  }, []);

  return (
    <CommentsWrapper>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <div className="avatar">
            <img src={comment.avatar} alt="avatar" />
          </div>
          <div className="content">
            <h4>{comment.nickname}</h4>
            <p>{comment.content}</p>
            <div className="details">
              <span>时间: {comment.time}</span> |{" "}
              <span>IP地址: {comment.ip}</span>
            </div>
          </div>
        </div>
      ))}
    </CommentsWrapper>
  );
};

export default Comments;
