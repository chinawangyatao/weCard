import React, { memo } from "react";
import { Swiper } from "@nutui/nutui-react-taro";
import "./index.scss";
const Index = memo(() => {
  return (
    <>
      <Swiper
        defaultValue={0}
        autoPlay
        loop={true}
        className={"swiperWrapper"}
        indicator
        height={130}
      >
        <Swiper.Item>
          <div className={"bannerBG"}>
            <span>Banner1</span>
          </div>
        </Swiper.Item>
        <Swiper.Item>
          <div className={"bannerBG"}>
            <span>Banner2</span>
          </div>
        </Swiper.Item>
        <Swiper.Item>
          <div className={"bannerBG"}>
            <span>Banner3</span>
          </div>
        </Swiper.Item>
      </Swiper>
    </>
  );
});

export default Index;
