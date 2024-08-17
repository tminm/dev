import styled from "styled-components";

export const DynamicWrapper = styled.div`
  .container {
    margin: 1em auto;
    font-family: "Courier New", Courier, monospace;
    line-height: 2;
    position: relative;
    padding: 20px 20px;
    border: 4px solid #fff;
    box-sizing: border-box;
  }
  .eraser {
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px 20px;
    box-sizing: border-box;
  }

  .text {
    font-weight: 700;
    --p: 5%;
    background: linear-gradient(
      to right,
      #0000 var(--p),
      #99c8f0 calc(var(--p) + 100px)
    );
    color: transparent;
    animation: erase 5s forwards;
  }

  .text2 {
    font-weight: 700;
  }

  @property --p {
    syntax: "<percentage>";
    initial-value: 0%;
    inherits: false;
  }

  @keyframes erase {
    to {
      --p: 100%;
    }
  }
`;
