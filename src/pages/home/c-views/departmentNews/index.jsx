import React, { memo } from "react";
import "./index.scss";
import TitleBar from "@/components/titleBar";
const Index = memo(() => {
  return (
    <>
      <div className={"departmentNewsContainer"}>
        <TitleBar title={"热点新闻"} more={"查看更多"} />
        <div className={"content"}>
          <div className={"contentItem"}>
            <div className={"image"}></div>
            <div className={"title"}>
              <div>
                <div className={"titleName"}>这是新闻标题标题</div>
                <div className={"titleSubtitle"}>这里是副标题，只显示一行…</div>
              </div>
              <div className={"titleTime"}>2023-03-21</div>
            </div>
          </div>
          <div className={"contentItem"}>
            <div className={"image"}></div>
            <div className={"title"}>
              <div>
                <div className={"titleName"}>这是新闻标题标题</div>
                <div className={"titleSubtitle"}>
                  这里是副标题，只显示一行v只显示一行…
                </div>
              </div>
              <div className={"titleTime"}>2023-03-21</div>
            </div>
          </div>
          <div className={"contentItem"}>
            <div className={"image"}></div>
            <div className={"title"}>
              <div>
                <div className={"titleName"}>这是新闻标题标题</div>
                <div className={"titleSubtitle"}>这里是副标题，只显示一行…</div>
              </div>
              <div className={"titleTime"}>2023-03-21</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Index;
