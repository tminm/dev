import styled from "styled-components";

export const CommentsWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  /* padding: 20px; */

  .comment {
    display: flex;
    align-items: center; /* 水平对齐头像和昵称 */
    /* padding: 10px; */
    border-bottom: 1px solid #ddd;

    .avatar {
      margin-right: 15px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .content {
      flex: 1;
      h4 {
        margin: 0 0 5px 0;
        font-size: 16px;
      }
      p {
        margin: 0 0 10px 0;
        line-height: 1.5;
      }
      .details {
        font-size: 12px;
        color: #888;
      }
    }
  }
`;
