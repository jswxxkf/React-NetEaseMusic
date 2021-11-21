import styled from "styled-components";
import playPanelBg from "@/assets/img/playpanel_bg.png";

export const AppPlayerPanelWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 986px;
  height: 301px;
  color: #e2e2e2;
  .main {
    position: relative;
    display: flex;
    height: 260px;
    overflow: hidden;
    background: url(${playPanelBg}) -1014px 0 repeat-y;
    .image {
      position: absolute;
      width: 980px;
      height: auto;
      opacity: 0.15;
    }
  }
`;
