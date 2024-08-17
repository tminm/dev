import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .header {
    left: 0;
    top: 0;
    width: 100%;
    position: fixed;

    background-color: rgba(210, 246, 203, 0.9);
    z-index: 10;
  }

  .center {
    display: flex;
    width: 1180px;
    margin: 0 auto;
  }

  .logo img {
    width: 200px;
    height: 130px;
  }

  .list {
    height: 100px;
  }

  .lis {
    display: flex;
  }

  .lis img {
    width: 30px;
    height: 30px;
    line-height: 100px;
    margin-top: 36px;
    margin-right: 14px;
  }
  .lis li {
    display: inline-block;
    line-height: 100px;
    margin-left: 55px;
    font-size: 1.5rem;
  }
  .lis li a:hover {
    color: skyblue;
  }
`;
