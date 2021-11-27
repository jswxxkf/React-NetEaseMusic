import styled from "styled-components";

export const FallbackWrapper = styled.div`
  .mask-layer {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    background-color: #fff;
    opacity: 0.5;
  }
  .ant-spin-spinning {
    position: fixed !important;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
