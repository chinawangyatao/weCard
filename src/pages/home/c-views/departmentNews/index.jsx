import React, { memo, useEffect, useState } from "react";
import "./index.scss";
import TitleBar from "@/components/titleBar";
import Taro from "@tarojs/taro";
import { newsList } from "./commonData";
import { InfiniteLoading } from "@nutui/nutui-react-taro";
import { getCompanyBaseInfo } from "@/servers/api/column";
import message from "@/components/message";
const Index = memo(() => {
  const [hasMore, setHasMore] = useState(true);
  const [listData, setListData] = useState([]);

  const loadMore = async () => {
    console.log("触底了");
    if (pageData.page * pageData.pageSize > pageData.total) {
      setHasMore(false);
    } else {
      setListData((prevState) => {
        return { ...prevState, page: pageData.page++ };
      });
      getData();
    }
  };
  const [pageData, setPageData] = useState({
    arType: "21",
    page: 1,
    pageSize: 10,
    total: 0,
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    getCompanyBaseInfo(pageData)
      .then((res) => {
        if (res.code !== 0) {
          message.errorMessage(res.msg);
        } else {
          setPageData((prevState) => {
            return { ...prevState, total: res.data.total };
          });
          setListData((prevState) => [...prevState, ...res.data.list]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {listData.length > 0 && (
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
                      <div className={"titleSubtitle"}>
                        {item.titleSubtitle}
                      </div>
                    </div>
                    <div className={"titleTime"}>{item.date}</div>
                  </div>
                </div>
              ))}
            </InfiniteLoading>
          </div>
        </div>
      )}
    </>
  );
});

export default Index;
