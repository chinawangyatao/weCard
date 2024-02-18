import React, { memo, useEffect } from "react";
import { NavBar } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import "./index.scss";
import { Image, View } from "@tarojs/components";
import FixedNav from "./cpnc/fixedNav";
import NavBarBottom from "./cpnc/navBarBottom";

const Index = memo(() => {
  useEffect(() => {}, []);
  const navigateTo = (url) => {
    try {
      Taro.switchTab({
        url: url,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const cardData = {
    businessCardTitle: "名片 title", //名片 title
    signature:
      "个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名", //个性签名
    infoImage:
      "//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg", //照片地址
    name: "姜医生", //姓名
    jobTitle: "主任医师", //职称  住院医师｜主治医师｜主任医师｜医师｜科室负责人
    department: "Depart", //部门
    tabs: ["感染科全国前10"], //标签
    content:
      "//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg", //内容照片
    phone: "15624181187", //手机号码
    infoID: "a876567890", //用户 id
  };

  return (
    <>
      <NavBar className={"navbar"}>
        <span>电子名片</span>
      </NavBar>
      <View className={"container"}>
        <View className={"containerCard"}>
          <View className={"headerTitle"}>
            <h1>{cardData.businessCardTitle}</h1>
            <span className={"subtitle"}>{cardData.signature}</span>

            <View className={"cardDetails"}>
              <View className={"cardDetailsTop"}>
                <View>
                  <div
                    style={{
                      width: "150px",
                      height: "180px",
                      borderRadius: "10px",
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                      }}
                      fadeIn
                      mode={"scaleToFill"}
                      src={cardData.infoImage}
                    />
                  </div>
                </View>
                <View className={"introduction"}>
                  <View>
                    <span>{cardData.name}</span>
                  </View>
                  <View className={"jobTitle"}>
                    <span>{cardData.jobTitle}</span>
                    <span>|</span>
                    <span>{cardData.department}</span>
                  </View>
                  {cardData.tabs.map((item, index) => (
                    <View className={"honorLabel"} key={index}>
                      <span>{item}</span>
                    </View>
                  )) && ""}
                </View>
              </View>
              <Image
                className={"cardDetailsContent"}
                width={"80px"}
                src={cardData.content}
              />
            </View>
          </View>
        </View>
      </View>
      <FixedNav userId={cardData.infoID} phone={cardData.phone}></FixedNav>
      <NavBarBottom navigateTo={navigateTo} />
    </>
  );
});

export default Index;
