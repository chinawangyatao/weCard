import React, { memo, useEffect, useState } from "react";
import "./newsDetails.scss";

import bgimage from "../../assets/images/tbg.jpg";
import { Image, Tabs } from "@nutui/nutui-react-taro";
import { getCurrentInstance } from "@tarojs/taro";
import { getCaseDetailById } from "@/servers/api/case";
import message from "@/components/message";
import ViewRichText from "@/components/viewRichText";
const Index = memo(() => {
  const [tab1value, setTab1value] = useState("0");
  const [pageData, setPageData] = useState({
    contents: "",
    cover: "",
    title: "",
    subTitle: "",
  });

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
        setPageData(data);
      })
      .catch(({ msg }) => {
        message.errorMessage(msg);
      });
  }, [id]);
  return (
    <>
      <div className={"newsDetailsContainer"}>
        <div className={"headerContent"}>
          <Image src={pageData.cover} height={250} mode={"aspectFill"} />
        </div>
        <div className={"mainContent"}>
          <div className={"title"}>
            <h1>{pageData.title}</h1>
            <span>{pageData.subTitle}</span>
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
              <ViewRichText value={pageData.contents} />
            </Tabs.TabPane>
            {/*<Tabs.TabPane title="目录"> 目录 </Tabs.TabPane>*/}
          </Tabs>
        </div>
      </div>
    </>
  );
});

export default Index;
