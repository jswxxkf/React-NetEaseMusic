import styled from "styled-components";

export const PlayerInfoWrapper = styled.div`
  display: flex;
  padding: 47px 30px 40px 39px;
`;

export const InfoLeft = styled.div`
  width: 206px;
  .image {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 198px;
    height: 198px;
    .cover {
      background-position: -140px -580px;
      width: 206px;
      height: 206px;
      top: -4px;
      left: -4px;
    }
  }
  .link {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      width: 16px;
      height: 16px;
      background-position: -34px -863px;
    }
    a {
      color: #0c73c2;
      text-decoration: underline;
    }
  }
`;

export const InfoRight = styled.div`
  width: 414px;
  margin-left: 20px;
  .header {
    display: flex;
    align-items: center;
    i {
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
    }
    .title {
      font-size: 24px;
      margin-left: 10px;
    }
  }
  .singer,
  .album {
    font-size: 14px;
    margin: 10px 0;
    a {
      color: #0c73c2;
    }
    .slash {
      margin: 0 5px;
    }
  }
  .lyric {
    padding: 30px 0 50px;
    .lyric-info {
      .text {
        margin: 6px 0;
      }
    }
    .lyric-control {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0;
      color: #0c73c2;
      cursor: pointer;
      background-color: #fff;
      &:hover {
        text-decoration: underline;
      }
      span {
        margin-right: 5px;
      }
      i {
        width: 11px;
        height: 8px;
        background-position: ${(props) =>
            props.isExpanded ? "-45px" : "-65px"} -520px;
      }
    }
  }
`;
