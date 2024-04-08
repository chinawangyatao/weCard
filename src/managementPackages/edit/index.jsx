import React, { memo } from "react";
import { Cell } from "@nutui/nutui-react-taro";
import { cellList } from "./commonData";
import "./index.scss";
const Index = memo(() => {
  return (
    <>
      <div className={"header"}>vip card</div>
      <Cell.Group>
        {cellList.map((item) => (
          <Cell key={item.id} title={item.title} extra={item.extra}></Cell>
        ))}
      </Cell.Group>
    </>
  );
});

export default Index;
