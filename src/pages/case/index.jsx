import React, { useEffect, useMemo, useState } from "react";
import { Tabs } from "@nutui/nutui-react-taro";
import CaseCard from "./c-views/caseCard";
import { getCaseDetailList, getCaseList } from "@/servers/api/case";
import message from "@/components/message";

const Index = (props) => {
  const list5 = Array.from(new Array(2).keys());

  const [pageData, setPageData] = useState({
    caseList: [],
    caseDetailList: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getCaseList()
      .then((res) => {
        const { code, data, msg } = res;
        if (code === 200) {
          setPageData((prevState) => ({ ...prevState, caseList: data }));
          setTabValue(data[0].id);
          caseDetailList(data[0].id);
        } else {
          message.errorMessage(msg);
        }
      })
      .then(() => {});
  };
  //获取详情列表
  const caseDetailList = (pkId) => {
    getCaseDetailList({ pkId }).then((res) => {
      const { code, data, msg } = res;
      if (code === 200) {
        setPageData((prevState) => ({ ...prevState, caseDetailList: data }));
      } else {
        message.errorMessage(msg);
      }
    });
  };

  // tab切换事件
  const [tabValue, setTabValue] = useState();
  const tabsChangeHandle = (value) => {
    setTabValue(value);
    caseDetailList(value);
  };

  // 缓存pageData.caseDetailList数据
  const memoizedCaseDetailList = useMemo(
    () => pageData.caseDetailList,
    [pageData.caseDetailList]
  );
  // 缓存pageData.caseList
  const memoizedCaseList = useMemo(
    () => pageData.caseList,
    [pageData.caseList]
  );

  return (
    <>
      <Tabs
        tabStyle={{ height: "100vh", width: "120px" }}
        value={tabValue}
        onChange={tabsChangeHandle}
        activeType="smile"
        direction="vertical"
      >
        {memoizedCaseList.map((item) => (
          <Tabs.TabPane key={item.id} title={item.typeName} value={item.id}>
            {item.typeName}
            {tabValue === item.id && (
              <CaseCard
                caseDetailList={memoizedCaseDetailList}
                pkId={item.id}
              />
            )}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default Index;
