import styled from "styled-components";

export const PlayerSongsWrapper = styled.div`
  .songs {
    .song-item {
      display: flex;
      align-items: center;
      margin-top: 15px;
      width: 200px;
      .image {
        width: 50px;
        height: 50px;
      }
      .info {
        display: flex;
        width: 135px;
        height: 50px;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 10px;
        .name {
          font-size: 14px;
          color: #000;
        }
        .source {
          color: #999;
          .nickname {
            color: #666;
            margin-left: 5px;
          }
        }
      }
    }
  }
`;
