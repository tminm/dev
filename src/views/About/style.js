import styled from "styled-components";

const AboutWrapper = styled.div`
  .about {
    border: 4px solid #fff;
    width: 100%;
    max-width: 800px; /* 设置最大宽度 */
    margin: 0 auto; /* 居中显示 */
    padding: 10px; /* 添加内边距 */

    /* 防止文本超出 */
    overflow-wrap: break-word; /* 推荐的属性，允许长单词换行 */
    word-wrap: break-word; /* 兼容旧浏览器 */
    white-space: normal; /* 允许文本自动换行 */
  }

  .content {
    width: 100%;
    height: auto;
    line-height: 2.5; /* 增加行高以提高可读性 */
    margin-top: 20px;
  }
`;
export default AboutWrapper;
