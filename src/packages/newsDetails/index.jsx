import React, { memo, useState } from "react";
import "./newsDetails.scss";

import bgimage from "../../assets/images/tbg.jpg";
import { Tabs } from "@nutui/nutui-react-taro";
const Index = memo(() => {
  const [tab1value, setTab1value] = useState("0");
  return (
    <>
      <div className={"newsDetailsContainer"}>
        <div className={"headerContent"}>
          <img width={"100%"} src={bgimage} alt={""} />
        </div>
        <div className={"mainContent"}>
          <div className={"title"}>
            <h1 className={""}>这里是主标题只支持一行显示多余…</h1>
            <span>
              副标题课程简介最多支持两行显示，副标题课程简介最多支持两行显示副标题课程简介最多支持两行超出显示
            </span>
          </div>
        </div>

        <div className={"tabs"}>
          <Tabs
            value={tab1value}
            onChange={(value) => {
              setTab1value(value);
            }}
          >
            <Tabs.TabPane title="详情"> 详情 </Tabs.TabPane>
            <Tabs.TabPane title="目录"> 目录 </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
});

export default Index;
