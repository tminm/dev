import styled from "styled-components";

export const AsideWrapper = styled.div`
  .title {
    /* position: fixed;
    left: 60;
    top: 60; */
    margin-right: 60px;
  }
  .top {
    width: 280px;
    height: 110px;
    background-color: var(--bg3);
    border-radius: 20px;
    padding: 25px 25px;
    box-sizing: border-box;
  }

  .top > h3:first-of-type {
    font-size: 20px;
    color: #00ffff;
    margin-bottom: 10px;
  }

  h3 {
    margin-top: 5px;
  }

  .center .date {
    width: 280px;
    height: 150px;
    font-size: 15px;
    border-radius: 20px 20px 0 0;
    background-color: var(--bg3);
    color: var(--text-color2);
    margin-top: 20px;
    padding: 25px 25px;
    box-sizing: border-box;
  }

  .center .list {
    height: 140px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0 0 20px 20px;
    padding: 15px;
  }

  .center .list img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .center .list li {
    display: flex;
    height: 36px;
    align-items: center;
  }

  .center .list a {
    width: 100%;
    height: 100%;
    line-height: 36px;
  }

  .center .list a:hover {
    background-color: #00ffff;
  }
`;
