import React, { memo, useEffect } from "react";
import { View } from "@tarojs/components";
import "./index.scss";
import FixedNav from "./cpnc/fixedNav";
import NavBarBottom from "./cpnc/navBarBottom";

import { getUserInfo } from "@/servers/servers";
import Taro from "@tarojs/taro";
const queryUserInfo = async () => {
  try {
    const { data } = await getUserInfo();
    console.log(data);
    if (data.userId === 0) {
      await Taro.reLaunch({ url: "/pages/login/index" });
    }
  } catch (e) {
    console.log(e);
  }
};
const Index = memo(() => {
  useEffect(() => {
    queryUserInfo();
  }, []);

  // 查询用户信息
  const navigateTo = (url) => {
    try {
      Taro.switchTab({
        url: url,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <View className={"container"}>
        <View className={"containerCard"}>
          <View className={"headerTitle"}>
            <h1>名片 title</h1>
            <span className={"subtitle"}>
              副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题
            </span>

            <View className={"cardDetails"}>
              <View>
                <div
                  style={{
                    width: "150px",
                    height: "180px",
                    background: "white",
                    borderRadius: "10px",
                  }}
                ></div>
                {/*<Image*/}
                {/*  width={"80px"}*/}
                {/*  src={*/}
                {/*    "//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg"*/}
                {/*  }*/}
                {/*/>*/}
              </View>
              <View className={"introduction"}>
                <View>
                  <span>姜医生</span>
                </View>
                <View className={"jobTitle"}>
                  <span>主任医师</span>
                  <span>|</span>
                  <span>感染内科</span>
                </View>
                <View className={"honorLabel"}>
                  <span>感染科全国前10</span>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <FixedNav></FixedNav>
      <NavBarBottom navigateTo={navigateTo} />
    </>
  );
});

export default Index;
