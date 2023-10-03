import React, { memo } from "react";
import { Button } from "@nutui/nutui-react-taro";
import { saveUserInfo } from "@/servers/servers";
import style from "./login.module.scss";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
const Index = memo(() => {
  return (
    <>
      {/*<View>*/}
      {/*  <span>*/}
      {/*  </span>*/}
      {/*  */}
      {/*</View>*/}
      <Button
        className={style.BtnContainer}
        type={"primary"}
        open-type={"getPhoneNumber"}
        onGetPhoneNumber={getPhoneNumber}
      >
        一键微信登录
      </Button>
    </>
  );
});

const getPhoneNumber = async (e) => {
  const { encryptedData, iv, code } = e.target;
  try {
    const { success } = await saveUserInfo({
      encryptedData,
      code,
      iv,
    });
    if (success) {
      await Taro.switchTab({ url: "pages/mine/index" });
    } else {
      await Taro.showToast({ title: "登录失败！", icon: "error" });
    }
  } catch (e) {
    console.log(e);
  }
};

export default Index;
