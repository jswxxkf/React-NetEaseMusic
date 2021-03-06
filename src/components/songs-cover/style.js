import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
  width: 140px;
  margin: 20px ${(props) => props.right || 0}px 20px 0;
  .cover-top {
    position: relative;
    cursor: pointer;
    & > img {
      width: 140px;
      height: 140px;
      visibility: ${(props) => (props.loading ? "hidden" : "visible")};
    }
    .skeleton {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
    .cover {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;
        .headset {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }
  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }
  .cover-source {
    color: #666;
  }
`;
