import React from "react";
import { Button } from "@nutui/nutui-react-taro";
import "./index.scss";
import Banner from "./c-views/banner/index";

const handleClick = () => {
  wx.login({
    success(res) {
      console.log(res);
    },
  });
};
const Index = (props) => {
  return (
    <>
      <Banner></Banner>
      <div className={"container"}>
        <Button type="primary" onClick={handleClick}>
          登录123
        </Button>
      </div>
    </>
  );
};

export default Index;
