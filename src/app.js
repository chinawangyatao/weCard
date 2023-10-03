import React, { useEffect } from "react";
import Taro, { useDidShow, useDidHide } from "@tarojs/taro";
// 全局样式
import "./app.scss";
import { wechatlLogin } from "@/servers/servers";

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    loginHandle();
  }, []);

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return props.children;
}

const loginHandle = () => {
  const accountInfo = Taro.getAccountInfoSync().miniProgram;
  wx.login({
    success: async (res) => {
      // console.log(accountInfo);
      // console.log(res);
      try {
        const result = await wechatlLogin({ code: res.code });
        // console.log(result);
        await Taro.setStorage({
          key: "token",
          data: result.token,
        });
      } catch (err) {
        console.log(err);
      }
      if (res.code) {
        //发起网络请求
      } else {
        console.log("登录失败！" + res.errMsg);
      }
    },
  });
};

export default App;
