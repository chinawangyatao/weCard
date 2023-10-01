import React, { memo } from "react";
import "./index.scss";
import TitleBar from "@/components/titleBar";

const Index = memo(() => {
  return (
    <>
      <div className={"departmentProfileContainer"}>
        <TitleBar title={"科室环境"} more={"查看更多"} />
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
