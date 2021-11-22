import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { scrollTo } from "@/utils/ui-helper";

import { PanelPlayLyricWrapper } from "./style";
import classNames from "classnames";

export default memo(function KFPanelPlayLyric() {
  // redux hooks
  const { currentLyrics, currentLyricIndex } = useSelector(
    (state) => ({
      currentLyrics: state.getIn(["player", "currentLyrics"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    }),
    shallowEqual
  );

  // other hooks
  const lycPanelRef = useRef();
  useEffect(() => {
    if (lycPanelRef.current) {
      if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
      // 已到底部
      if (
        lycPanelRef.current.scrollHeight - lycPanelRef.current.scrollTop <=
        lycPanelRef.current.clientHeight
      )
        return;
      scrollTo(lycPanelRef.current, (currentLyricIndex - 3) * 32, 300);
    }
  }, [lycPanelRef, currentLyricIndex]);

  return (
    <PanelPlayLyricWrapper ref={lycPanelRef}>
      <div className="lyric-content">
        {currentLyrics.map((item, index) => {
          return (
            <div
              key={item.time + Math.random().toFixed(5)}
              className={classNames([
                "lyric-item",
                { active: index === currentLyricIndex },
              ])}
            >
              {item.content}
            </div>
          );
        })}
      </div>
      {currentLyrics.length === 0 && (
        <div className="empty-lyrics">N / A&nbsp;&nbsp;暂无歌词</div>
      )}
    </PanelPlayLyricWrapper>
  );
});
