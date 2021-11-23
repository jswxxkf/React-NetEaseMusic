import styled from "styled-components";

export const PlayerRelevantWrapper = styled.div`
  margin-top: 40px;
  .songs {
    padding-top: 20px;
    .song-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      .info {
        display: flex;
        width: 150px;
        flex-direction: column;
        align-content: space-between;
        .title {
          a {
            color: #666;
          }
        }
        .artist {
          a {
            color: #999;
          }
          .slash {
            margin: 0 5px;
          }
        }
      }
      .operate {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-evenly;
        .item {
          width: 10px;
          height: 11px;
          cursor: pointer;
        }
        .play {
          background-position: -69px -455px;
        }
        .add {
          background-position: -87px -454px;
        }
      }
    }
  }
`;
