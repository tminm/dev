import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .header {
    left: 0;
    top: 0;
    width: 100%;
    /* background-color: rgba(255, 255, 255, 0.6); */
  }

  .sticky {
    position: fixed;
  }

  .non-sticky {
    position: static;
  }

  .center {
    display: flex;
    width: 1350px;
    margin: 0 auto;
  }

  .logo img {
    width: 200px;
    height: 130px;
    margin-left: 43px;
  }

  .list {
    width: 100%;
    height: 100px;
  }

  .lis {
    display: flex;
  }

  .lis img {
    width: 30px;
    height: 30px;
    color: var(--text-color2);
    line-height: 100px;
    margin-top: 36px;
    margin-right: 14px;
  }
  .lis li {
    justify-content: center;
    display: inline-block;
    line-height: 100px;
    margin-left: 55px;
    font-size: 1.5rem;
    flex: 1;
  }
  .lis li a:hover {
    color: skyblue;
  }
`;
