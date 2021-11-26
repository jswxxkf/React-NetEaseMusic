import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changeCurrentCategoryAction,
  getCategoriesAction,
  getCategorySongsAction,
} from "../../store/actionCreators";

import { SongsCategoryWrapper } from "./style";

export default memo(function KFSongsCategory(props) {
  const { categoryCloser } = props;
  // redux
  const dispatch = useDispatch();
  const { categories } = useSelector(
    (state) => ({
      categories: state.getIn(["songs", "categories"]),
    }),
    shallowEqual
  );

  // other hooks
  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  // 其他业务逻辑
  const selectCategory = (name) => {
    dispatch(changeCurrentCategoryAction(name));
    dispatch(getCategorySongsAction(0));
  };

  return (
    <SongsCategoryWrapper>
      <div className="sprite_icon arrow"></div>
      <div className="all">
        <span
          className="link"
          onClick={() => {
            selectCategory("全部");
            categoryCloser();
          }}
        >
          全部风格
        </span>
      </div>
      <div className="category">
        {categories.map((category, index) => {
          return (
            <dl key={category.name} className={"item" + index}>
              <dt>
                <i className="sprite_icon2 icon"></i>
                <span>{category.name}</span>
              </dt>
              <dd>
                {category.subs.map((subCat, index) => {
                  return (
                    <div key={subCat.name} className="item">
                      <span
                        className="link"
                        onClick={() => {
                          selectCategory(subCat.name);
                          categoryCloser();
                        }}
                      >
                        {subCat.name}
                      </span>
                      <span className="divider">|</span>
                    </div>
                  );
                })}
              </dd>
            </dl>
          );
        })}
      </div>
    </SongsCategoryWrapper>
  );
});
