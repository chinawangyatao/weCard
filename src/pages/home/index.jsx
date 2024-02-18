import React, { useEffect } from "react";
import "./index.scss";
import Banner from "./c-views/banner/index";
import TabBarIcon from "./c-views/tabBarIcon";
import DepartmentProfile from "./c-views/departmentProfile";
import DepartmentEnvironment from "./c-views/departmentEnvironment";
import DepartmentTechnology from "./c-views/departmentTechnology";
import DepartmentNews from "./c-views/departmentNews";
import Taro from "@tarojs/taro";

const Index = (props) => {
  // const nav = useNa
  useEffect(() => {
    Taro.navigateTo({ url: "/packages/card/index" });
  });
  return (
    <>
      <Banner></Banner>
      <div className={"container"}>
        {/*  导航栏*/}
        <TabBarIcon />
        {/*  科室简介*/}
        <DepartmentProfile />
        {/*科室环境*/}
        <DepartmentEnvironment />
        {/* 诊疗技术 */}
        <DepartmentTechnology />
        {/*热点新闻*/}
        <DepartmentNews />
      </div>
    </>
  );
};

export default Index;
