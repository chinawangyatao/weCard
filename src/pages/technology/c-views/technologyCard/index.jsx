import React, { memo } from "react";

import "./index.scss";
import Taro from "@tarojs/taro";

// 路由函数
const route = (url) => {
  Taro.navigateTo({ url: url })
    .then((res) => {})
    .catch((err) => {});
};

const Index = memo((props) => {
  return (
    <>
      <div className={"technologyCardContainer"}>
        <div
          className={"contentItem"}
          onClick={() => route("/packages/technicalDetails/index")}
        >
          <div className={"image"}></div>
          <div className={"title"}>
            <div>
              <div className={"titleName"}>这里是{props.title}主标题</div>
              <div className={"titleSubtitle"}>这里是副标题，只显示一行…</div>
            </div>
            <div className={"titleTime"}>浏览3446</div>
          </div>
        </div>
        <div
          className={"contentItem"}
          onClick={() => route("/packages/technicalDetails/index")}
        >
          <div className={"image"}></div>
          <div className={"title"}>
            <div>
              <div className={"titleName"}>这里是{props.title}主标题</div>
              <div className={"titleSubtitle"}>这里是副标题，只显示一行…</div>
            </div>
            <div className={"titleTime"}>浏览3446</div>
          </div>
        </div>
        <div
          className={"contentItem"}
          onClick={() => route("/packages/technicalDetails/index")}
        >
          <div className={"image"}></div>
          <div className={"title"}>
            <div>
              <div className={"titleName"}>这里是{props.title}主标题</div>
              <div className={"titleSubtitle"}>这里是副标题，只显示一行…</div>
            </div>
            <div className={"titleTime"}>浏览3446</div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Index;
