import React, { memo } from "react";
import "./index.scss";
import TitleBar from "@/components/titleBar";
import Taro from "@tarojs/taro";
const Index = memo(() => {
  const navigate = () => {
    Taro.navigateTo({ url: "/packages/introductionDetails/index" });
  };
  return (
    <>
      <div className={"departmentProfileContainer"}>
        <TitleBar title={"科室简介"} more={"查看更多"} navigate={navigate} />
        <div className={"content"}>
          <div className={"headerContent"}>
            <div className={"image"}></div>
            <div className={"title"}>
              <div className={"titleName"}>
                <span>门诊部</span>
              </div>
              <div className={"titleTabs"}>
                {["医疗", "预防", "康复"].map((item) => {
                  return <div className={"tabs"}>{item}</div>;
                })}
              </div>
            </div>
          </div>
          <div className={"infoContent"}>
            <span>
              门诊部，是集医疗、预防、康复为一体的综合性医疗部门，内设外科、内科、儿科、妇产科、中西医结合科、中医科、康复理疗科、耳鼻喉眼科、口腔科、皮肤科、抽血室等特色科室。且由多年资的中医、中西医专家以及曾在有知名度的名院名专科进修的中青年技术骨干坐诊，是医院的一个重要职能部门，门诊实行人性化管理，以人为本，感动服务，且设有导诊处、自助挂号打印报告等为患者提供优质就医环境。
            </span>
          </div>
        </div>
      </div>
    </>
  );
});

export default Index;
