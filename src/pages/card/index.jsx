import React, { memo, useEffect } from "react";
import { Button, NavBar } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import "./index.scss";
import { Image, View } from "@tarojs/components";
import { IconFont, RectLeft } from "@nutui/icons-react-taro";
import FixedNav from "./cpnc/fixedNav";
import NavBarBottom from "./cpnc/navBarBottom";

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
      <NavBar
        className={"navbar"}
        back={<RectLeft color={"#fff"} />}
        onBackClick={() => Taro.showToast({ title: "返回" })}
      >
        <span>电子名片</span>
      </NavBar>
      <View className={"container"}>
        <View className={"containerCard"}>
          <View className={"headerTitle"}>
            <h1>名片 title</h1>
            <span className={"subtitle"}>
              副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题
            </span>

            <View className={"cardDetails"}>
              <View>
                <Image
                  width={"80px"}
                  src={
                    "//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg"
                  }
                />
              </View>
              <View>
                <View>
                  <span>姜医生</span>
                </View>
                <View>
                  <span>主任医师</span>|<span>感染内科</span>
                </View>
                <View>感染科全国前10</View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <FixedNav></FixedNav>
      <NavBarBottom />
    </>
  );
});

export default Index;
