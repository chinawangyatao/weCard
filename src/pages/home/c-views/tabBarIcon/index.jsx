import React, { memo } from "react";
import "./index.scss";
const tabbarList = [
  { title: "科室简介", image: "", route: "" },
  { title: "诊疗技术", image: "", route: "" },
  { title: "经典案例", image: "", route: "" },
  { title: "热点新闻", image: "", route: "" },
];

const Index = memo(() => {
  return (
    <>
      <div className={"tabBarIcon"}>
        {tabbarList.map((item, index) => {
          return (
            <div className={"tabBarIconContainer"}>
              <div className={"tabBarIconImage"}>{/*<image />*/}</div>
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
});

export default Index;
