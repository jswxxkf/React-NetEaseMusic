import styled from "styled-components";

export const PanelPlayLyricWrapper = styled.div`
  position: relative;
  flex: 1;
  padding: 0 20px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .lyric-content {
    .lyric-item {
      line-height: 32px;
      text-align: center;
      color: #989898;
      font-size: 14px;
      transition: color 0.3s ease-in-out;
      &.active {
        color: #fff;
        font-size: 16px;
      }
    }
  }
  .empty-lyrics {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    text-align: center;
  }
`;
