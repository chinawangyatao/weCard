import React, { memo, useEffect } from "react";
import { Button } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import "./index.scss";

const Index = memo(() => {
  useEffect(() => {
    loginHandle();
  }, []);
  const loginHandle = () => {
    const accountInfo = Taro.getAccountInfoSync().miniProgram;
    wx.login({
      success(res) {
        console.log(accountInfo);
        console.log(res);
        if (res.code) {
          //发起网络请求
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      },
    });
  };
  return (
    <>
      <div className={"container"}>
        <div className={"headerTitle"}>
          <h1>添加名片</h1>
          <span>副标题副标题</span>
        </div>
      </div>
    </>
  );
});

export default Index;
