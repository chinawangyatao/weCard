import React, { memo, useEffect, useState } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { getCaseDetailById } from "@/servers/api/case";
import message from "@/components/message";
import { Editor, View } from "@tarojs/components";
import "./index.scss";

const Index = () => {
  const { router } = getCurrentInstance();
  const { id, pkId } = router.params;
  const [value, setValue] = useState("");
  useEffect(() => {
    getCaseDetailById({ id, pkId })
      .then((res) => {
        const { code, data, msg } = res;
        if (code !== 0) {
          message.errorMessage(msg);
          return;
        }
        setValue(data.contents);
      })
      .catch(({ msg }) => {
        message.errorMessage(msg);
      });
  }, [id, pkId]);

  useEffect(() => {
    editorReady();
  }, [value]);

  let editorCtx;
  const editorReady = (val) => {
    Taro.createSelectorQuery()
      .select("#editor")
      .context((res) => {
        editorCtx = res.context;
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
    <View className={"caseDetailContainer"}>
      <Editor
        id="editor"
        readOnly
        className="editor"
        placeholder={"loading..."}
        onReady={() => editorReady(value)}
      ></Editor>
    </View>
  );
};

export default Index;
