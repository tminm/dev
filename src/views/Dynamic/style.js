import styled from "styled-components";

export const DynamicWrapper = styled.div`
  .container {
    margin: 1em auto;
    font-family: "Courier New", Courier, monospace;
    line-height: 2;
    position: relative;
    padding: 20px 20px;
    box-sizing: border-box;
    border: 5px solid transparent;
    border-image-slice: 1;
    animation: rotateGradient 3s linear infinite;
  }

  @keyframes rotateGradient {
    0% {
      border-image-source: linear-gradient(45deg, #f06, #4a90e2);
    }
    100% {
      border-image-source: linear-gradient(405deg, #f06, #4a90e2);
    }
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
      #cdfad3 calc(var(--p) + 100px)
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
