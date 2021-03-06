import styled from "styled-components";
import progressBar from "@/assets/img/progress_bar.png";
import spriteIcon from "@/assets/img/sprite_icon.png";

export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
  .panel-enter {
    opacity: 0;
    bottom: -227px;
  }
  .panel-enter-active {
    opacity: 1;
    bottom: 79px;
    transition: all 0.5s ease;
  }
  .panel-enter-done,
  .panel-exit {
    opacity: 1;
    bottom: 79px;
  }
  .panel-exit-active {
    opacity: 0;
    bottom: -227px;
    transition: all 0.5s ease;
  }
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  .prev,
  .next,
  .play {
    position: relative;
    cursor: pointer;
    &::before {
      content: ${'"'}${(props) => props.tipText}${'"'};
      display: none;
      padding: 0 10px;
      position: absolute;
      top: calc(50% - 38px);
      left: 50%;
      width: max-content;
      height: 30px;
      transform: translate(-50%, -50%);
      line-height: 30px;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.65);
    }
    &:hover {
      &::before {
        display: block;
      }
    }
  }
  .prev,
  .next {
    width: 28px;
    height: 28px;
  }
  .prev {
    background-position: 0 -130px;
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    /* 播放暂停来回切换时换图 */
    background-position: 0 ${(props) => (props.isPlaying ? "-165px" : "-204px")};
  }
  .next {
    background-position: -80px -130px;
  }
`;

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;
  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;
    .song {
      display: flex;
      position: relative;
      top: 8px;
      left: 8px;
      color: #e1e1e1;
      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
      .lyric-finetune-panel {
        width: 200px;
        margin-left: 50px;
        display: flex;
        justify-content: space-evenly;
        .finetune-value {
          color: #a1a1a1;
          cursor: pointer;
          transition: color 0.5s ease;
          &.activeFinetune {
            color: #fff;
          }
        }
      }
      .lyric-fontsize-panel {
        width: 150px;
        margin-left: 30px;
        display: flex;
        justify-content: space-evenly;
        .fontsize-value {
          color: #a1a1a1;
          cursor: pointer;
          &.activeFontSize {
            color: #fff;
          }
        }
      }
    }
    .progress {
      display: flex;
      align-items: center;
      .ant-slider {
        width: 493px;
        margin-right: 10px;
        .ant-slider-rail {
          height: 9px;
          background: url(${progressBar}) right 0;
        }
        .ant-slider-track {
          height: 9px;
          background: url(${progressBar}) left -66px;
        }
        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${spriteIcon}) 0 -250px;
        }
      }
      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
  .lyric-finetune-panel,
  .lyric-fontsize-panel,
  .image {
    position: relative;
    &::before {
      content: ${'"'}${(props) => props.tipText}${'"'};
      display: none;
      padding: 0 10px;
      position: absolute;
      top: calc(50% - 30px);
      left: 50%;
      width: max-content;
      height: 30px;
      transform: translate(-50%, -50%);
      line-height: 30px;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.65);
    }
    &:hover {
      &::before {
        display: block;
      }
    }
  }
  .image {
    &::before {
      top: -21px;
    }
  }
`;

export const Operator = styled.div`
  display: flex;
  align-items: center;
  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .favor {
    background-position: -88px -163px;
  }
  .share {
    background-position: -114px -163px;
  }
  .left {
    display: flex;
    position: relative;
  }
  .right {
    display: flex;
    position: relative;
    top: 1px;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    .volume {
      background-position: -2px -248px;
    }
    .loop {
      background-position: ${(props) => {
        switch (props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
    }
    .playlist {
      position: relative;
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -70px;
      .play-num {
        position: absolute;
        top: 2px;
        left: 34px;
        color: #fff;
      }
    }
  }
  .favor,
  .share,
  .volume,
  .loop,
  .playlist {
    position: relative;
    &::before {
      content: ${'"'}${(props) => props.tipText}${'"'};
      display: none;
      padding: 0 10px;
      position: absolute;
      top: calc(50% - 38px);
      left: 50%;
      width: max-content;
      height: 30px;
      transform: translate(-50%, -50%);
      line-height: 30px;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.65);
    }
    &:hover {
      &::before {
        display: block;
      }
    }
  }
`;
