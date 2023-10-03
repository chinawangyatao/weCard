import React, { memo } from "react";
import "./caseCard.scss";
import Taro from "@tarojs/taro";

const route = (url) => {
  try {
    Taro.navigateTo({ url: url });
    console.log(url);
  } catch (e) {
    console.log(e);
  }
};
const Index = memo(() => {
  return (
    <>
      <div className={"caseCardContainer"}>
        <div
          className={"caseCardContent"}
          onClick={() => route("/packages/caseDetails/index")}
        >
          <div className={"image"}></div>
          <div className={"title"}>
            <span>这里是标题显示两行</span>
          </div>
        </div>
        <div
          className={"caseCardContent"}
          onClick={() => route("/packages/casesDetails/index")}
        >
          <div className={"image"}></div>
          <div className={"title"}>
            <span>这里是标题显示两行</span>
          </div>
        </div>
        <div className={"caseCardContent"}>
          <div className={"image"}></div>
          <div className={"title"}>
            <span>这里是标题显示两行</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default Index;
