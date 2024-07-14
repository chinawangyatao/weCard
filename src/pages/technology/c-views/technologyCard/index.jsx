import React, { memo } from "react";

import "./index.scss";
import Taro from "@tarojs/taro";
import { Image } from "@nutui/nutui-react-taro";

// 路由函数
const route = (url) => {
  Taro.navigateTo({ url: url })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Index = ({ data }) => {
  return (
    <>
      <div className={"technologyCardContainer"}>
        <div
          className={"contentItem"}
          onClick={() =>
            route(
              `/packages/technicalDetails/index?id=${data.id}&pkId=${data.pkId}`
            )
          }
        >
          <div className={"image"}>
            <Image src={data.cover} mode={"aspectFill"} />
          </div>
          <div className={"title"}>
            <div>
              <div className={"titleName"}>{data.title ?? "--"}</div>
              <div className={"titleSubtitle"}>这里是副标题，只显示一行…</div>
            </div>
            <div className={"titleTime"}>浏览3446</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
