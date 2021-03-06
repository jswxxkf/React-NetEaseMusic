import styled from "styled-components";

export const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${(props) => props.width + "px"};
  height: 150px;
  .album-image {
    position: relative;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    img {
      visibility: ${(props) => (props.loading ? "hidden" : "visible")};
      width: ${(props) => props.size + "px"};
      height: ${(props) => props.size + "px"};
    }
    .skeleton {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      width: ${(props) => props.width + "px"};
      height: ${(props) => props.size + "px"};
    }
    .cover {
      position: absolute;
      z-index: 2;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;
    }
  }
  .album-info {
    font-size: 12px;
    width: ${(props) => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist {
      color: #666;
    }
  }
`;
