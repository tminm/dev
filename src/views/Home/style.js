import styled from "styled-components";

export const Homewrapper = styled.div`
  .home {
    height: auto;
    font-family: serif;
    --webkit-font-smoothing: antialiased;
    background: linear-gradient(to bottom, var(--bg1), var(--bg2));
    color: var(--text-color);
  }

  .main {
    display: flex;
    margin-top: 10px;
    width: 1180px;
    margin: 30px auto;
    min-width: 600px;
  }

  .container {
    flex: 1;
  }

  .mytitle {
    width: 1180px;
    height: 100px;
    margin: 0px auto;
    /* padding-top: 200px; */
    margin-bottom: 10px;
    text-align: center;
  }

  .mytitle h3 {
    margin-top: 33px;
  }

  .container {
    width: 100%;
  }
`;
