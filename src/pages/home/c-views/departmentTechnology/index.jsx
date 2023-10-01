import React, { memo } from "react";
import TitleBar from "@/components/titleBar";
import "./index.scss";
const Index = memo(() => {
  return (
    <>
      <div className={"departmentTechnologyContainer"}>
        <TitleBar title={"诊疗技术"} more={"查看更多"} />
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
