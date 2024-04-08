import React, { memo } from "react";
import TitleBar from "@/components/titleBar";
import "./index.scss";
import Taro from "@tarojs/taro";
const Index = memo(() => {
  const navigate = () => {
    Taro.navigateTo({ url: "/packages/technicalDetails/index" });
  };
  return (
    <>
      <div className={"departmentTechnologyContainer"}>
        <TitleBar title={"诊疗技术"} />
        <div className={"content"}>
          <div className={"swiperContent"}>
            <div className={"image"}></div>
            <span>微创甲状腺射频消融术</span>
          </div>
          <div className={"swiperContent"}>
            <div className={"image"}></div>
            <span>微创甲状腺射频消融术</span>
          </div>
          <div className={"swiperContent"}>
            <div className={"image"}></div>
            <span>微创甲状腺射频消融术</span>
          </div>
          <div className={"swiperContent"}>
            <div className={"image"}></div>
            <span>微创甲状腺射频消融术</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default Index;
