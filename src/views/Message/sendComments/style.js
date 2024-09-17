import styled from "styled-components";
// 样式
export const PostCommentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.5);

  .textarea {
    width: 100%;
    height: 115px;
    margin-bottom: 15px;
  }

  .input-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .confirm {
    display: flex;
    justify-content: flex-end;
    text-align: center;
  }
`;
