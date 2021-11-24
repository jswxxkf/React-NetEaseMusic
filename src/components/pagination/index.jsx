import React, { memo } from "react";

import { Pagination } from "antd";
import { PaginationWrapper } from "./style";

export default memo(function KFPagination(props) {
  // props & stats
  const { currentPage, total, pageSize, onPageChange } = props;
  // 其他业务逻辑
  const itemRender = (page, type, originalElement) => {
    // 仅定制上一页和下一页切换的按钮
    if (type === "prev") {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === "next") {
      return <button className="control next">下一页 &gt;</button>;
    }
    // 当前页的按钮展示效果保持默认
    return originalElement;
  };

  return (
    <PaginationWrapper>
      <Pagination
        className="pagination"
        size="small"
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange}
      />
    </PaginationWrapper>
  );
});
