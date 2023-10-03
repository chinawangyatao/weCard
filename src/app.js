import React, { useEffect } from "react";
import Taro, { useDidShow, useDidHide } from "@tarojs/taro";
// 全局样式
import "./app.scss";
import { wechatlogin } from "@/src/servers/servers";
import { saveUserInfo } from "@/src/servers/servers";

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    loginHandle();
    wx.getUserInfo({
      success: async (res) => {
        const { encryptedData, cloudID, iv, rawData, signature } = res;
        // try {
        //   const reslut = await saveUserInfo({
        //     encryptedData,
        //     cloudID,
        //     iv,
        //     rawData,
        //     signature,
        //   });
        //   console.log(reslut);
        // } catch (e) {
        //   console.log(e);
        // }
      },
    });
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
      console.log(accountInfo);
      console.log(res);
      try {
        const result = await wechatlogin({ code: res.code });
        console.log(result);
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
