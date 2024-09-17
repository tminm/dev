import React, { memo } from "react";
import { BookOutlined } from "@ant-design/icons";
interface propsType {
  title: string;
  content: string[];
}
const Content = memo((props: propsType) => {
  const { title, content } = props;
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>
        <span style={{ marginRight: "10px" }}>
          <BookOutlined />
        </span>
        {title}
      </h2>
      <div className="content">
        {content.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
});

export default Content;
