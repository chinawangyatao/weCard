import React, { memo, useEffect, useState } from "react";
import TitleBar from "@/components/titleBar";
import "./index.scss";
import Taro from "@tarojs/taro";
import { getCompanyBaseInfo } from "@/servers/api/column";
import message from "@/components/message";
import { Grid, Image } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import { route } from "@/servers/utils";
const Index = memo(() => {
  const navigate = () => {
    Taro.navigateTo({ url: "/packages/technicalDetails/index" });
  };

  const [dataList, setDataList] = useState([]);
  const [pageData, setPageData] = useState({
    arType: "21",
    page: 1,
    pageSize: 10,
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
        <div className={"departmentTechnologyContainer"}>
          <TitleBar title={"诊疗技术"} />
          <View className="content">
            {dataList.map((i) => {
              return (
                <View
                  className={"swiperContent"}
                  key={i.baseId}
                  onClick={() =>
                    route(
                      `/packages/technicalDetails/index?id=${i.baseId}&pkId=${pageData.arType}&title=${i.title}`
                    )
                  }
                >
                  <Image
                    lazyLoad
                    radius={"5%"}
                    height={100}
                    width={130}
                    src={i.cover}
                  ></Image>
                  <span>{i.title}</span>
                </View>
              );
            })}
          </View>
        </div>
      )}
    </>
  );
});

export default Index;
