import React from "react";
import "./index.scss";
import Banner from "./c-views/banner/index";
import TabBarIcon from "./c-views/tabBarIcon";
import DepartmentProfile from "./c-views/departmentProfile";
import DepartmentEnvironment from "./c-views/departmentEnvironment";
import DepartmentTechnology from "./c-views/departmentTechnology";
import DepartmentNews from "./c-views/departmentNews";
import { Button } from "@nutui/nutui-react-taro";
import { saveUserInfo } from "@/src/servers/servers";

const getPhoneNumber = async (e) => {
  console.log(e.target);
  const { encryptedData, iv, code } = e.target;
  try {
    const reslut = await saveUserInfo({
      encryptedData,
      code,
      iv,
    });
    console.log(reslut);
  } catch (e) {
    console.log(e);
  }
};
const Index = (props) => {
  return (
    <>
      <Button open-type={"getPhoneNumber"} onGetPhoneNumber={getPhoneNumber}>
        获取用户信息
      </Button>
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
