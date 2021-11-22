import styled from "styled-components";
import playPanelBg from "@/assets/img/playpanel_bg.png";

export const PanelPlayHeaderWrapper = styled.div`
  display: flex;
  height: 41px;
  line-height: 41px;
  background: url(${playPanelBg}) 0 0;
`;

export const PlayHeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 553px;
  padding: 0 0 0 25px;
  h3 {
    color: #e2e2e2;
    font-weight: 700;
  }
  .operator {
    display: flex;
    color: #ccc;
    button {
      display: flex;
      align-items: center;
      background-color: transparent;
      color: #ccc;
      cursor: pointer;
      margin-right: 10px;
      transition: color 0.5s ease;
      &:hover {
        color: #fff;
      }
    }
    .icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
    .favor {
      background-position: -24px 0;
    }
    .remove {
      width: 13px;
      background-position: -51px 0;
    }
  }
`;

export const PlayHeaderRight = styled.div`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 14px;
`;
