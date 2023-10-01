import React, { useState } from "react";
import { Tabs } from "@nutui/nutui-react-taro";
import CaseCard from "./c-views/caseCard";

const Index = (props) => {
  const [tab5value, setTab5value] = useState("0");
  const list5 = Array.from(new Array(2).keys());
  return (
    <>
      <Tabs
        style={{ height: "100vh" }}
        value={tab5value}
        onChange={(value) => {
          setTab5value(value);
        }}
        direction="vertical"
      >
        {[
          "内分泌科",
          "心血管内科",
          "消化内科",
          "神经内科",
          "骨科",
          "感染科",
        ].map((item) => (
          <Tabs.TabPane key={item} title={item}>
            {item}
            <CaseCard />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default Index;
