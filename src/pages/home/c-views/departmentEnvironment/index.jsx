import React, { memo, useEffect, useState } from "react";
import "./index.scss";
import TitleBar from "@/components/titleBar";
import Taro from "@tarojs/taro";
import { getCompanyBaseInfo } from "@/servers/api/column";
import message from "@/components/message";
import { Image } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";

const Index = memo(() => {
  const navigate = () => {
    Taro.navigateTo({ url: "/packages/pictureDetails/index" });
  };

  const [dataList, setDataList] = useState([]);
  const [pageData, setPageData] = useState({
    arType: "20",
    page: 1,
    pageSize: 6,
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    getCompanyBaseInfo(pageData)
      .then((res) => {
        if (res.code !== 200) {
          message.errorMessage(res.msg);
        } else {
          setDataList(res.rows ?? []);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {dataList.length > 0 && (
        <div className={"departmentProfileContainer"}>
          <TitleBar title={"科室环境"} more={"查看更多"} navigate={navigate} />
          <div className={"content"}>
            {dataList.map((i) => {
              return (
                <View key={i.baseId} className={"image"}>
                  <Image
                    mode={"aspectFill"}
                    lazyLoad
                    src={i.cover}
                    radius={"5%"}
                  ></Image>
                  <span className={"imageTitle"}>{i.title}</span>
                </View>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
});

export default Index;
