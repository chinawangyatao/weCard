import React, { memo, useState } from "react";
import {
  Button,
  Grid,
  Image,
  ImagePreview,
  SearchBar,
  Switch,
  Uploader,
} from "@nutui/nutui-react-taro";
import { Plus, Search2 } from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";

const Index = memo(() => {
  const imges = [
    { src: "//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg" },
  ];
  const [showPreview, setShowPreview] = useState(false);
  const changeSwitch = (value, e) => {
    // console.log(value, e);
    Taro.showToast({ title: value ? "已启用该轮播" : "已禁用该轮播" });
  };

  const editHandle = () => {
    console.log(22);
    Taro.navigateTo({ url: `/managementPackages/editCarouselInfoItem/index` });
  };
  return (
    <>
      <SearchBar shape="round" maxLength={5} />
      <Grid reverse columns={2} style={{ marginTop: "10px" }}>
        <Grid.Item text={"图片名字"}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "10px",
              width: "100%",
            }}
          >
            <Switch onChange={changeSwitch} activeText="开" inactiveText="关" />
            <Button
              type={"info"}
              size={"mini"}
              fill={"none"}
              onClick={(e) => editHandle()}
            >
              编辑
            </Button>
          </div>

          <Image
            src={imges[0].src}
            height={100}
            onClick={() => setShowPreview(true)}
          />
        </Grid.Item>
        <Grid.Item>
          <Uploader uploadLabel={"增加轮播"} />
        </Grid.Item>
      </Grid>

      <ImagePreview
        autoPlay
        images={imges}
        visible={showPreview}
        defaultValue={1}
        onClose={() => setShowPreview(false)}
        indicator
      />
    </>
  );
});

export default Index;
