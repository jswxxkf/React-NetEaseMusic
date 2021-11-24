import styled from "styled-components";

export const PaginationWrapper = styled.div`
  .pagination {
    margin: 30px 0;
    text-align: center;
    .control {
      width: 69px;
      height: 24px;
      margin: 0 5px;
      line-height: 22px;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 2px;
      color: #333;
      &:disabled {
        color: #999;
      }
    }
    .ant-pagination-item {
      border: 1px solid #ccc !important;
      margin: 0 5px;
      border-radius: 3px;
      &:hover a {
        color: #c20c0c;
      }
      a {
        font-size: 12px;
      }
      &.ant-pagination-item-active {
        background-color: #c20c0c;
        border-color: #a2161b;
        a {
          color: #fff;
        }
      }
    }
  }
`;
