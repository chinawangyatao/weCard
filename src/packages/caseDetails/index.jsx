import React, { memo, useEffect, useState } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { getCaseDetailById } from "@/servers/api/case";
import message from "@/components/message";
import { View } from "@tarojs/components";
import "./index.scss";
import ViewRichText from "@/components/viewRichText";

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

  return (
    <View className={"caseDetailContainer"}>
      <ViewRichText value={value} />
    </View>
  );
};

export default Index;
