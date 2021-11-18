import styled from "styled-components";

export const HotHostsWrapper = styled.div`
  padding: 20px 18px;
  .host-lists {
    padding-top: 20px;
    .host-info {
      display: flex;
      height: 40px;
      margin-bottom: 10px;
      background-color: #fafafa;
      .avatar {
        width: 40px;
        height: 40px;
      }
      .intro {
        display: flex;
        padding-left: 10px;
        flex-direction: column;
        font-size: 12px;
        justify-content: space-evenly;
        .name {
        }
        .desc {
          color: #666666;
        }
      }
    }
  }
`;
