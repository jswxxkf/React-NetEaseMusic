import styled from "styled-components";
import spriteTable from "@/assets/img/sprite_table.png";

export const RankingListWrapper = styled.div`
  padding: 0 40px;
  .play-list {
    table {
      width: 100%;
      border: 1px solid #d9d9d9;
      text-align: center;
      thead {
        th {
          height: 34px;
          line-height: 34px;
          color: #666;
          border: 1px solid #ddd;
          border-width: 0 0 1px 1px;
          background-image: url(${spriteTable});
        }
        .ranking {
          width: 78px;
          border-left: none;
        }
        .duration {
          width: 91px;
        }
        .singer {
          width: 173px;
        }
      }
      tbody {
        td {
          padding: 6px 10px;
        }
        /* n starts from zero */
        tr:nth-child(2n) {
          background-color: #fff;
        }
        tr:nth-child(2n + 1) {
          background-color: #f7f7f7;
        }
        .artist-name {
          width: 157px;
          &:hover {
            text-decoration: underline;
          }
        }
        .rank-num {
          display: flex;
          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }
          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        }
        .song-name {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }
          .play {
            width: 19px;
            height: 17px;
            background-position: 0 -103px;
            cursor: pointer;
          }
          .name {
            width: 200px;
            text-align: left;
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
