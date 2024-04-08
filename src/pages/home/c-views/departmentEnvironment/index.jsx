import React, { memo } from "react";
import "./index.scss";
import TitleBar from "@/components/titleBar";
import Taro from "@tarojs/taro";

const Index = memo(() => {
  const navigate = () => {
    Taro.navigateTo({ url: "/packages/pictureDetails/index" });
  };
  return (
    <>
      <div className={"departmentProfileContainer"}>
        <TitleBar title={"科室环境"} more={"查看更多"} navigate={navigate} />
        <div className={"content"}>
          <div className={"image"}></div>
          <div className={"image"}></div>
          <div className={"image"}></div>
          <div className={"image"}></div>
          <div className={"image"}></div>
          <div className={"image"}></div>
        </div>
      </div>
    </>
  );
});

export default Index;
