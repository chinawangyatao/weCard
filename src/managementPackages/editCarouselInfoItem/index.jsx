import React, { memo } from "react";
import { Button, Form, Input, InputNumber } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";

const Index = memo(() => {
  const submitData = (values) => {
    console.log(values);
    Taro.navigateBack(-1);
  };
  return (
    <>
      <Form
        onFinish={submitData}
        labelPosition="right"
        footer={
          <>
            <Button formType="submit" block type="primary">
              提交
            </Button>
          </>
        }
      >
        <Form.Item label={"轮播图名称"} name={"name"}>
          <Input placeholder={"请输入轮播图名称"} />
        </Form.Item>
        <Form.Item label={"轮播图排序"} name={"sort"}>
          <InputNumber value={2} />
        </Form.Item>
      </Form>
    </>
  );
});

export default Index;
