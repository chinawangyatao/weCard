import React, { memo, useEffect, useState } from "react";
import RichTextEdit from "@/components/richTextEdit";
import Taro from "@tarojs/taro";

const Index = memo(() => {
  return (
    <>
      <div className={"rich_text_edit_wrapper"}>
        <div className={"content"}>
          <RichTextEdit />
        </div>
      </div>
    </>
  );
});

export default Index;
