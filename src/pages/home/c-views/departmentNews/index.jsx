import React, { memo, useState } from "react";
import "./index.scss";
import TitleBar from "@/components/titleBar";
import Taro from "@tarojs/taro";
import { newsList } from "./commonData";
import { InfiniteLoading } from "@nutui/nutui-react-taro";
const Index = memo(() => {
  const [hasMore, setHasMore] = useState(true);
  const [listData, setListData] = useState(newsList);
  const navigate = () => {
    Taro.navigateTo({ url: "/packages/newsDetails/index" });
  };

  const loadMore = async () => {
    console.log("触底了");
    await sleep(500);
    if (listData.length > 10) {
      setHasMore(false);
    } else {
      listData.push({
        id: listData.length + 1,
        title: "这是新闻标题标题",
        titleSubtitle: "这里是副标题，只显示一行…",
        date: "2023-03-21",
      });
      setListData([...listData]);
    }
  };
  return (
    <>
      <div className={"departmentNewsContainer"}>
        <TitleBar title={"热点新闻"} />
        <div className={"content"} id={"scroll"}>
          <InfiniteLoading
            target="scroll"
            hasMore={hasMore}
            onLoadMore={loadMore}
          >
            {listData.map((item) => (
              <div className={"contentItem"} key={item.id}>
                <div className={"image"}></div>
                <div className={"title"}>
                  <div>
                    <div className={"titleName"}>{item.title}</div>
                    <div className={"titleSubtitle"}>{item.titleSubtitle}</div>
                  </div>
                  <div className={"titleTime"}>{item.date}</div>
                </div>
              </div>
            ))}
          </InfiniteLoading>
        </div>
      </div>
    </>
  );
});
const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

export default Index;
