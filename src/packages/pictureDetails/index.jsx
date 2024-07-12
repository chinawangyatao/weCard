import React, { memo, useEffect, useState } from "react";
import { getCompanyBaseInfo } from "@/servers/api/column";
import message from "@/components/message";
import { View } from "@tarojs/components";
import { Grid, Image, ImagePreview } from "@nutui/nutui-react-taro";
import "./index.scss";
const Index = () => {
  const [dataList, setDataList] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [images, setImages] = useState([]);

  const [pageData, setPageData] = useState({
    arType: "20",
    page: 1,
    pageSize: 10,
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    getCompanyBaseInfo(pageData)
      .then((res) => {
        if (res.code !== 0) {
          message.errorMessage(res.msg);
        } else {
          setDataList(res.data.list ?? []);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectImageHandle = (image) => {
    setImages([{ src: image }]);
    setShowPreview(true);
  };

  return (
    <>
      <div className={"content"}>
        <Grid columns={2}>
          {dataList.map((i) => {
            return (
              <Grid.Item text={i.title}>
                <View key={i.baseId} className={"image"}>
                  <Image
                    mode={"aspectFill"}
                    onClick={() => selectImageHandle(i.cover)}
                    lazyLoad
                    src={i.cover}
                    radius={"5%"}
                    className={"image"}
                  ></Image>
                </View>
              </Grid.Item>
            );
          })}
          <ImagePreview
            autoPlay
            images={images}
            visible={showPreview}
            onClose={() => setShowPreview(false)}
          />
        </Grid>
      </div>
    </>
  );
};

export default Index;
