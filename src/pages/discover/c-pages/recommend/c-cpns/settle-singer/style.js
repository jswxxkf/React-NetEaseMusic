import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
  padding: 20px 18px;
  .singer-lists {
    padding-top: 20px;
    .singer-info {
      display: flex;
      height: 62px;
      margin-bottom: 16px;
      background-color: #fafafa;
      .avatar {
        width: 62px;
        height: 62px;
      }
      .intro {
        display: flex;
        padding-left: 16px;
        flex-direction: column;
        justify-content: space-evenly;
        .name {
          font-size: 14px;
          font-weight: 700;
        }
        .desc {
          font-size: 12px;
          color: #666666;
        }
      }
    }
  }
  .apply-for {
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: space-around;
    border-radius: 4px;
    background-color: #fafafa;
    border: 1px solid #c3c3c3;
    a {
      color: #333;
      font-weight: 700;
      font-size: 12px;
      text-decoration: none;
    }
  }
`;
