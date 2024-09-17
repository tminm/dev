import React, { useState } from "react";
import styled from "styled-components";
import { PostCommentWrapper } from "./style";
import { Flex, Input, Button } from "antd";
import { UserOutlined, FileDoneOutlined } from "@ant-design/icons";
// 评论输入组件
const PostComment: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [content, setContent] = useState("");

  const { TextArea } = Input;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Change:", e.target.value);
  };
  // 处理头像文件上传
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
    }
  };

  // 提交评论
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const time = new Date().toLocaleString();
    const ip = "127.0.0.1"; // 模拟 IP 地址
    const commentData = {
      nickname,
      avatar: avatar ? URL.createObjectURL(avatar) : "",
      content,
      time,
      ip,
    };

    console.log("提交的评论:", commentData);

    // 在这里发送请求保存评论，模拟请求:
    // await axios.post("/api/comments", commentData);

    // 清空表单
    setNickname("");
    setAvatar(null);
    setContent("");
  };

  return (
    <PostCommentWrapper>
      <div>
        <Flex vertical gap={32} style={{ marginBottom: "25px" }}>
          <TextArea
            showCount
            maxLength={100}
            onChange={onChange}
            placeholder="disable resize"
            style={{ height: 120, resize: "none" }}
          />
        </Flex>
        <div className="input-group">
          <Input
            size="large"
            placeholder="昵称"
            prefix={<UserOutlined />}
            style={{ width: "48%" }}
          />
          <Input
            size="large"
            placeholder="邮箱/QQ号"
            prefix={<UserOutlined />}
            style={{ width: "48%" }}
          />
        </div>
        <div className="confirm">
          <FileDoneOutlined
            style={{ fontSize: "28px", marginRight: "10px" }}
          ></FileDoneOutlined>
          <Button style={{ width: "128px", height: "40px" }}>发送</Button>
        </div>
      </div>
    </PostCommentWrapper>
  );
};

export default PostComment;
