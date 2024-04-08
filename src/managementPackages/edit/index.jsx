import React, { memo } from "react";
import { Cell } from "@nutui/nutui-react-taro";
import { cellList } from "./commonData";
import "./index.scss";
import Taro from "@tarojs/taro";
const Index = memo(() => {
  const navigate = (url) => {
    Taro.navigateTo({ url: url });
  };
  // const
  return (
    <>
      <div className={"header"}>vip card</div>
      <Cell.Group>
        {cellList.map((item) => (
          <Cell
            key={item.id}
            title={item.title}
            extra={item.extra}
            onClick={() => navigate(item.link)}
          ></Cell>
        ))}
      </Cell.Group>
    </>
  );
});

export default Index;
