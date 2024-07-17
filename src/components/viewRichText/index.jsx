import React, { useEffect } from "react";
import Taro from "@tarojs/taro";
import { Editor } from "@tarojs/components";
import { Empty } from "@nutui/nutui-react-taro";

const Index = ({ value }) => {
  useEffect(() => {
    editorReady();
  }, [value]);

  let editorCtx;
  const editorReady = () => {
    Taro.createSelectorQuery()
      .select("#editor")
      .context((res) => {
        editorCtx = res?.context;
        // 在编辑器准备就绪时设置初始内容
        editorCtx &&
          editorCtx.setContents({
            html: value,
          });
        editorCtx && editorCtx.blur(); // 移除焦点
      })
      .exec();
  };
  return (
    <>
      {value.length > 0 ? (
        <Editor
          style={{ height: "100%", width: "100%" }}
          id="editor"
          readOnly
          className="editor"
          placeholder={"loading..."}
          onReady={() => editorReady(value)}
        ></Editor>
      ) : (
        <Empty description="无数据" />
      )}
    </>
  );
};

export default Index;
