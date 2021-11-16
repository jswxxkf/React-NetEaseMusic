import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  padding: 25px 0;
  .header {
    padding: 12px 12px 10px;
    font-size: 14px;
    color: #000;
    font-family: simsun;
  }
  .item {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 62px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover,
    &.active {
      background-color: #e6e6e6;
    }
    img {
      width: 40px;
      height: 40px;
    }
    .info {
      margin-left: 10px;
      .name {
        color: #000;
      }
      .update {
        margin-top: 5px;
        color: #999;
      }
    }
  }
`;
