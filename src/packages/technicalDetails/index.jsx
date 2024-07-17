import React, { memo, useEffect, useState } from "react";
import "./technicalDetails.scss";

import bgimage from "../../assets/images/tbg.jpg";
import { Tabs } from "@nutui/nutui-react-taro";
import { getCurrentInstance } from "@tarojs/taro";
import { getCaseDetailById } from "@/servers/api/case";
import message from "@/components/message";
import ViewRichText from "@/components/viewRichText";
const Index = memo(() => {
  const [tab1value, setTab1value] = useState("0");
  const [value, setValue] = useState("");

  const { router } = getCurrentInstance();
  const { id, pkId, title } = router.params;
  useEffect(() => {
    getCaseDetailById({ baseId: id })
      .then((res) => {
        const { code, data, msg } = res;
        if (code !== 0) {
          message.errorMessage(msg);
          return;
        }
        setValue(data.contents);
      })
      .catch(({ msg }) => {
        message.errorMessage(msg);
      });
  }, [id]);

  return (
    <>
      <div className={"technicalDetailsContainer"}>
        <div className={"headerContent"}>
          <img width={"100%"} src={bgimage} />
        </div>
        <div className={"content"}>
          <div className={"title"}>
            <h1 className={""}>{title}</h1>
            <span>
              副标题课程简介最多支持两行显示，副标题课程简介最多支持两行显示副标题课程简介最多支持两行超出显示…
            </span>
          </div>
        </div>

        <div className={"tabs"}>
          <Tabs
            value={tab1value}
            onChange={(value) => {
              setTab1value(value);
            }}
          >
            <Tabs.TabPane title="详情">
              <ViewRichText value={value} />
            </Tabs.TabPane>
            {/*<Tabs.TabPane title="目录"> 目录 </Tabs.TabPane>*/}
          </Tabs>
        </div>
      </div>
    </>
  );
});

export default Index;
