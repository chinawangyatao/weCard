import React from "react";
import "./index.scss";
import { View } from "@tarojs/components";
import { Col, Row, Image } from "@nutui/nutui-react-taro";
import qd from "@/assets/images/qd.jpg";
const Index = (props) => {
  return (
    <>
      <View className={"addWeChatWrapper"}>
        <View className={"addWeChatContent"}>
          <Image
            width={"350"}
            height={"350"}
            radius={20}
            mode={"scaleToFill"}
            src={qd}
            show-menu-by-longpress
          />
          <span>长按扫描上方二维码添加微信</span>
        </View>
      </View>
    </>
  );
};

export default Index;
