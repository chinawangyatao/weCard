import React, { memo, useEffect, useState } from "react";
import { Swiper, Image } from "@nutui/nutui-react-taro";
import "./index.scss";
import { getBannerList } from "@/servers/api/home";
import Taro from "@tarojs/taro";
import message from "@/components/message";
const Index = () => {
  const [bannerList, setBannerList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  /**
   * 获取 banner 数据
   * */
  const getData = () => {
    getBannerList().then((res) => {
      const { data, code, msg } = res;
      if (code === 0) {
        setBannerList(data);
      } else {
        message.errorMessage(msg);
      }
    });
  };

  return (
    <>
      <Swiper
        defaultValue={0}
        autoPlay
        loop={true}
        className={"swiperWrapper"}
        indicator
        height={180}
      >
        {bannerList.map((banner, bannerIndex) => {
          return (
            <Swiper.Item key={bannerIndex}>
              <Image src={banner.bannerPath} mode={"aspectFill"} />
            </Swiper.Item>
          );
        })}
      </Swiper>
    </>
  );
};

export default Index;
