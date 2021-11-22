import styled from "styled-components";
import playlistSprite from "@/assets/img/playlist_sprite.png";

export const PanelPlayListWrapper = styled.div`
  position: relative;
  width: 553px;
  padding: 2px;
  .empty-list {
    position: relative;
    padding: 10px;
    top: 50%;
    font-size: 20px;
    text-align: center;
    transform: translateY(-50%);
  }
  .play-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px 0 25px;
    height: 28px;
    line-height: 28px;
    color: #ccc;
    cursor: pointer;
    transition: all 0.3s ease;
    &.active {
      color: #fff;
      background-color: #000;
      ::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${playlistSprite}) -182px 0;
      }
    }
    &:hover {
      color: #fff;
      background-color: #000;
    }
    .right {
      display: flex;
      align-items: center;
      .singer {
        width: 80px;
      }
      .duration {
        width: 45px;
      }
      .link {
        margin-left: 20px;
        width: 14px;
        height: 16px;
        background-position: -100px 0;
      }
    }
  }
`;
