import styled from "styled-components";

export const ThemeHeaderSmallWrapper = styled.div`
  width: 100%;
  font-size: 12px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-weight: 700;
    }
    .more {
      color: #666666;
    }
  }
  .divide {
    width: 100%;
    height: 1px;
    margin-top: 7px;
    background-color: #cccccc;
  }
`;
