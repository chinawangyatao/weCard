import React, { memo } from "react";
import "./index.scss";
import { RectRight } from "@nutui/icons-react-taro";
const Index = memo((props) => {
  return (
    <>
      <div className={"titleBarContainer"}>
        <div className={"title"}>
          <span>{props.title}</span>
        </div>
        <div className={"rightIcon"}>
          <span>{props.more}</span>
          <RectRight size={16} />
        </div>
      </div>
    </>
  );
});

export default Index;
