import React, { memo } from "react";
import "./index.scss";
import { View } from "@tarojs/components";
import { Share } from "@nutui/icons-react-taro";
import { Button } from "@nutui/nutui-react-taro";

const Index = memo(() => {
  return (
    <>
      <View className={"navBarBottom"}>
        <View className={"share"}>
          <Button icon={<Share />} fill={"none"} openType={"share"}></Button>
          <span>分享</span>
        </View>
        <View>
          <Button
            type={"info"}
            fill={"outline"}
            size={"normal"}
            style={{ width: "150px" }}
          >
            收入名片夹
          </Button>
        </View>
        <View>
          <Button style={{ width: "150px" }} type={"info"} size={"normal"}>
            进入企业
          </Button>
        </View>
      </View>
    </>
  );
});

export default Index;
