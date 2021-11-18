import React, { memo } from "react";
import PropTypes from "prop-types";

import { ThemeHeaderSmallWrapper } from "./style";

const KFThemeHeaderSmall = memo((props) => {
  const { title, more } = props;
  return (
    <ThemeHeaderSmallWrapper>
      <div className="header">
        <div className="title">{title}</div>
        {more && (
          <a className="more" href="/todo">
            {more + " >"}
          </a>
        )}
      </div>
      <div className="divide"></div>
    </ThemeHeaderSmallWrapper>
  );
});

KFThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string,
};

export default KFThemeHeaderSmall;
