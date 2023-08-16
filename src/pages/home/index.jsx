import React from "react";
import { Button } from "@nutui/nutui-react-taro";
import "./index.scss";

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
      <div className={"container"}>
        <Button type="primary" onClick={handleClick}>
          登录
        </Button>
      </div>
    </>
  );
};

export default Index;
