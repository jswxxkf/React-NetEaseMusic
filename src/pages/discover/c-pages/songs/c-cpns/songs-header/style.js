import styled from "styled-components";

export const SongsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c20c0c;
  padding-bottom: 6px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .title {
    font-size: 24px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  .select {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    top: 2px;
    width: 91px;
    height: 31px;
    background-color: #fafafa;
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    color: #0c73c2;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      background-color: #fff;
    }
    span {
      line-height: 1;
    }
    i {
      width: 8px;
      height: 5px;
      background-position: -70px -543px;
    }
  }
  // transition
  .cate-enter {
    top: 20px;
    opacity: 0;
  }
  .cate-enter-active {
    top: 55px;
    opacity: 1;
    transition: all 0.5s ease;
  }
  .cate-enter-done,
  .cate-exit {
    top: 55px;
    opacity: 1;
  }
  .cate-exit-active {
    top: 20px;
    opacity: 0;
    transition: all 0.5s ease;
  }
`;

export const HeaderRight = styled.div`
  .hot {
    width: 46px;
    height: 29px;
    background-color: #c20c0c;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #aaa;
    cursor: pointer;
  }
`;
