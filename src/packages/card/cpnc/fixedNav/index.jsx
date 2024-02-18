import React, { memo, useState } from "react";
import { Image, View } from "@tarojs/components";
import "./index.scss";
import { Button } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";

const Index = memo((props) => {
  const { phone, userId } = props;
  const list = [
    {
      id: 1,
      text: "一键拨号",
      type: "phone",
      icon: "phone",
    },
    {
      id: 2,
      text: "去拜访",
      type: "maps",
      icon: "https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png",
    },
    {
      id: 3,
      text: "加微信",
      type: "weChat",
      num: 2,
      icon: "",
    },
    // {
    //   id: 4,
    //   text: "存入通讯录",
    //   icon: "https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png",
    // },
  ];

  const makePhone = (item) => {
    switch (item.type) {
      case "phone":
        Taro.makePhoneCall({
          phoneNumber: phone,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      case "maps":
        break;
      case "weChat":
        Taro.navigateTo({
          url: "/packages/addWeChat/index?userId=" + userId,
        });
        break;
    }
  };
  return (
    <>
      <View className={"fixedNav"}>
        <View className={"title"}>
          {list?.map((item) => (
            // <div key={item.id}>{item.text}</div>
            <Button onClick={() => makePhone(item)} type={"info"}>
              {item.text}
            </Button>
          ))}
        </View>
      </View>
    </>
  );
});

export default Index;
