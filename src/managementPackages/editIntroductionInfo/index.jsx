import React, { memo, useEffect } from "react";
import {
  Button,
  Cell,
  CellGroup,
  Form,
  Input,
  Uploader,
} from "@nutui/nutui-react-taro";
import { Plus, ArrowRight } from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";

const Index = memo(() => {
  useEffect(() => {}, []);

  const submitData = (value) => {
    console.log(value);
    Taro.navigateBack(-1);
  };

  return (
    <>
      <Form
        divider
        onFinish={submitData}
        footer={
          <>
            <Button formType="submit" block type="primary">
              提交
            </Button>
          </>
        }
      >
        <Form.Item label={"标题名称"} name={"title"}>
          <Input placeholder={"请输入标题名称"} />
        </Form.Item>

        <Form.Item label={"标签"} name={"tags"}>
          <Input placeholder={"请输入标签名称"} />
        </Form.Item>

        <Form.Item label={"封面图片"} name={"picture"}>
          <Uploader uploadIcon={<Plus />}></Uploader>
        </Form.Item>

        <Form.Item label={"简介"} name={"content"}>
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={() =>
              Taro.navigateTo({
                url: "/managementPackages/editRichText/index",
              })
            }
          >
            进入编辑器 <ArrowRight style={{ marginLeft: "10px" }} size={"14"} />
          </div>
        </Form.Item>
      </Form>
    </>
  );
});

export default Index;
