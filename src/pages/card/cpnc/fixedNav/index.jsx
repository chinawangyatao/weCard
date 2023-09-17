import React, { memo, useState } from "react";
import { View } from "@tarojs/components";
import "./index.scss";
const Index = memo(() => {
  const list = [
    {
      id: 1,
      text: "一键拨号",
      icon: "https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png",
    },
    {
      id: 2,
      text: "去拜访",
      icon: "https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png",
    },
    {
      id: 3,
      text: "加微信",
      num: 2,
      icon: "https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png",
    },
    {
      id: 4,
      text: "存入通讯录",
      icon: "https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png",
    },
  ];
  return (
    <>
      <View className={"fixedNav"}>
        <View className={"title"}>
          {list.map((item) => {
            return <div key={item.id}>{item.text}</div>;
          })}
        </View>
      </View>
    </>
  );
});

export default Index;
