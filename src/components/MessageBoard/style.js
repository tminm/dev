import styled from "styled-components";

export const MessageBoardWrapper = styled.div`
  .card {
    width: 888px;
    /* height: 350px; */
    margin-top: 20px;
    padding: 20px 20px;
    border: 4px solid #fff;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .title {
    margin-bottom: 20px;
  }

  .image {
    width: 100%;
    height: 220px;
    border-radius: 20px 20px 0 0;
  }

  .content {
    font-weight: 700;
    line-height: 2;
    margin-top: 28px;
    font-size: 20px;
  }
`;
