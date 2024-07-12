import React, { memo, useEffect, useMemo, useState } from "react";
import { getCompanyBaseInfo } from "@/servers/api/column";
import message from "@/components/message";
import { View } from "@tarojs/components";
import {
  Grid,
  Image,
  ImagePreview,
  InfiniteLoading,
} from "@nutui/nutui-react-taro";
import "./index.scss";
const Index = () => {
  const [dataList, setDataList] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [images, setImages] = useState([]);

  const [pageData, setPageData] = useState({
    arType: "20",
    page: 1,
    pageSize: 10,
    total: 0,
  });
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setDataList(dataList);
  }, [dataList]);
  const getData = () => {
    getCompanyBaseInfo(pageData)
      .then((res) => {
        if (res.code !== 0) {
          message.errorMessage(res.msg);
        } else {
          setDataList((prevState) => {
            return [...prevState, ...res.data.list];
          });
          setPageData((prevState) => {
            return { ...prevState, total: res.data.total };
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectImageHandle = (image) => {
    setImages([{ src: image }]);
    setShowPreview(true);
  };

  // 滚动加载
  const [hasMore, setHasMore] = useState(true);
  const loadMore = async () => {
    console.log("到底了");
    if (pageData.page * pageData.pageSize > pageData.total) {
      setHasMore(false);
    } else {
      setPageData((prevState) => {
        return { ...prevState, page: pageData.page++ };
      });
      getData();
    }
  };

  return (
    <>
      <div className={"content"}>
        <InfiniteLoading
          target="scroll"
          threshold={450}
          hasMore={hasMore}
          onLoadMore={loadMore}
        >
          <Grid columns={2} style={{ height: "100%" }}>
            {dataList.map((i) => {
              return (
                <Grid.Item key={i.baseId} text={i.title} className={"image"}>
                  <Image
                    mode={"aspectFill"}
                    onClick={() => selectImageHandle(i.cover)}
                    src={i.cover}
                    radius={"5%"}
                    className={"image"}
                  ></Image>
                </Grid.Item>
              );
            })}
          </Grid>
        </InfiniteLoading>
        <ImagePreview
          autoPlay
          images={images}
          visible={showPreview}
          onClose={() => setShowPreview(false)}
        />
      </div>
    </>
  );
};

export default Index;
