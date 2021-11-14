import React from "react";
import PropTypes from "prop-types";

import { HeaderWrapper } from "./style";

function KFThemeHeaderRCM(props) {
  const { title, keywords } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div key={item} className="item">
                <a href="todo">{item}</a>
                <div className="divider">|</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
}

KFThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};

KFThemeHeaderRCM.defaultProps = {
  title: "",
  keywords: [],
};

export default KFThemeHeaderRCM;
