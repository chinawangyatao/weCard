import React, { useEffect, useState } from "react";

import "./index.scss";
import TechnologyCard from "./c-views/technologyCard";
import { Empty, InfiniteLoading, Input, NavBar } from "@nutui/nutui-react-taro";
import { getCompanyAllArticle } from "@/servers/api/article";
import { View } from "@tarojs/components";
import { Search } from "@nutui/icons-react-taro";
import message from "@/components/message";

const Index = () => {
  const [pageData, setPageData] = useState({
    params: { Page: 1, PageSize: 10, keyword: "" },
    total: 0,
  });
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    // getData();
  }, []);

  const getData = () => {
    getCompanyAllArticle(pageData.params).then((res) => {
      if (res.code !== 0) {
        message.errorMessage(res.msg);
        return;
      }
      setDataList((prevState) => [...prevState, ...res.data.list]);
      setPageData((prevState) => {
        return {
          ...prevState,
          total: res.data.total,
        };
      });
    });
  };

  // 搜索 + 加载更多
  useEffect(() => {
    getData();
  }, [pageData.params]);
  const [showSearch, setShowSearch] = useState(false);
  const searchHandle = (event) => {
    setPageData((prevState) => {
      return {
        ...prevState,
        params: {
          ...prevState.params,
          keyword: event.target.value,
          Page: 1,
          PageSize: 10,
        },
      };
    });
  };

  const [hasMore, setHasMore] = useState(true);
  const loadMore = async () => {
    console.log("到底了");
    if (pageData.params.Page * pageData.params.PageSize > pageData.total) {
      setHasMore(false);
    } else {
      setPageData((prevState) => {
        return {
          ...prevState,
          params: { ...prevState.params, Page: prevState.params.Page++ },
        };
      });
    }
  };
  return (
    <View className="technologyContainer">
      <NavBar
        zIndex={9999}
        fixed
        titleAlign={"left"}
        style={{
          marginTop: wx.getSystemInfoSync().statusBarHeight + "px",
          background: "none",
        }}
      >
        <div
          className="searchTitle"
          style={{ height: "32px", width: showSearch ? "75%" : "32px" }}
        >
          <div style={{ lineHeight: 1, paddingLeft: "6px" }}>
            <Search size={18} onClick={() => setShowSearch(!showSearch)} />
          </div>
          {showSearch && (
            <>
              <Input
                style={{
                  height: "24px",
                  paddingLeft: "10px",
                }}
                confirmType={"search"}
                placeholder="请输入内容"
                onConfirm={searchHandle}
              />
            </>
          )}
        </div>
      </NavBar>
      <div className={"content"}>
        {dataList.length > 0 ? (
          <InfiniteLoading
            target="scroll"
            hasMore={hasMore}
            onLoadMore={loadMore}
          >
            {dataList.map((item, index) => {
              return <TechnologyCard data={item} key={item.id} />;
            })}
          </InfiniteLoading>
        ) : (
          <Empty description="无数据" />
        )}
      </div>
    </View>
  );
};

export default Index;
