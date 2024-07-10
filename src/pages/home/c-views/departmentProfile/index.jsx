import React, { memo, useEffect, useState } from "react";
import "./index.scss";
import TitleBar from "@/components/titleBar";
import Taro from "@tarojs/taro";
import { getCompanyBaseInfo } from "@/servers/api/home";
import { Button, Image, Popup } from "@nutui/nutui-react-taro";
import message from "@/components/message";

const Index = memo(() => {
  const navigate = () => {
    Taro.navigateTo({ url: "/packages/introductionDetails/index" });
  };

  useEffect(() => {
    getData();
  }, []);

  const [pageData, setPageData] = useState({
    companyDesc: "",
    companyLogo: "",
    companyName: "",
  });

  // 请求数据
  const getData = () => {
    getCompanyBaseInfo().then((res) => {
      const { data, code, msg } = res;
      if (code === 0) {
        setPageData((prevState) => ({
          ...prevState,
          companyName: data.companyName,
          companyLogo: data.companyLogo,
          companyDesc: data.companyDesc,
        }));
      } else {
        message.errorMessage(msg);
      }
    });
  };
  // 简介查看更多
  const [showDesc, setShowDesc] = useState(false);
  const companyDescMore = () => {
    setShowDesc(true);
  };

  return (
    <>
      <div className={"departmentProfileContainer"}>
        <TitleBar title={"科室简介"} />
        <div className={"content"}>
          <div className={"headerContent"}>
            <Image
              width={150}
              height={100}
              radius={"6%"}
              src={pageData.companyLogo}
              mode={"aspectFill"}
            />
            <div className={"title"}>
              <div className={"titleName"}>
                <span>{pageData.companyName}</span>
              </div>
              <div className={"titleTabs"}>
                {["医疗", "预防", "康复", "预防"].map((item) => {
                  return <div className={"tabs"}>{item}</div>;
                })}
              </div>
            </div>
          </div>
          <div className={"infoContent"}>
            <span>
              {pageData.companyDesc.length > 80 ? (
                <>
                  {pageData.companyDesc.slice(0, 50)}...
                  <Button
                    className={"more"}
                    type={"info"}
                    size={"small"}
                    fill={"none"}
                    onClick={companyDescMore}
                  >
                    查看更多
                  </Button>
                  <Popup
                    closeable
                    visible={showDesc}
                    position="bottom"
                    title={"查看简介"}
                    onClose={() => {
                      setShowDesc(false);
                    }}
                  >
                    <span style={{ padding: "10px" }}>
                      {pageData.companyDesc}
                    </span>
                  </Popup>
                </>
              ) : (
                pageData.companyDesc
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
});

export default Index;
