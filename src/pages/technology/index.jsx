import React, { useRef, useState } from "react";
import { Swiper, Tabs } from "@nutui/nutui-react-taro";

import "./index.scss";
import TechnologyCard from "./c-views/technologyCard";

const titleName = [
  { name: "消化内科" },
  { name: "皮肤科" },
  { name: "神经内科" },
  { name: "骨科" },
  { name: "心血管科" },
];
const Index = (props) => {
  const [tab1value, setTab1value] = useState("0");

  return (
    <>
      <div className={"technologyContainer"}>
        <Tabs
          tabStyle={{ backgroundColor: "white" }}
          autoHeight={true}
          value={tab1value}
          onChange={(value) => {
            setTab1value(value);
          }}
        >
          {titleName.map((item, index) => {
            return (
              <Tabs.TabPane title={item.name} key={index}>
                <TechnologyCard title={item.name} />
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default Index;
