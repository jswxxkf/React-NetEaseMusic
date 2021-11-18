import React, { memo } from "react";

import { AppPlayerBarWrapper, Control, PlayInfo, Operator } from "./style";
import { Slider } from "antd";

export default memo(function KFAppPlayerBar() {
  return (
    <AppPlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/todo">
              <img
                src="https://p4.music.126.net/_9irJFJaSp-hFZ2CHrXE9w==/109951165688557713.jpg?param=34y34"
                alt=""
              />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">红豆</span>
              <a className="singer-name" href="/todo">
                啊要买菜
              </a>
            </div>
            <div className="progress">
              <Slider className="ant-slider" defaultValue={30} />
              <div className="time">
                <span className="now-time">02:30</span>
                <span className="divider">/</span>
                <span className="duration">04:30</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
    </AppPlayerBarWrapper>
  );
});
