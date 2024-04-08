import React, { memo } from "react";
import { Avatar, Button, Form, Input, Uploader } from "@nutui/nutui-react-taro";

const Index = memo(() => {
  const submitSucceed = (value) => {
    console.log(value);
  };

  const submitFailed = (errors) => {
    console.log(errors);
  };

  return (
    <>
      <Form
        divider
        labelPosition="left"
        onFinish={(values) => submitSucceed(values)}
        onFinishFailed={(values, errors) => submitFailed(errors)}
        footer={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button formType="submit" type="primary">
              提交
            </Button>
            <Button formType="reset" style={{ marginLeft: "20px" }}>
              重置
            </Button>
          </div>
        }
      >
        <Form.Item label={"头像"} name={"avatar"}>
          <Uploader uploadIcon={<Avatar />} />
        </Form.Item>

        <Form.Item
          label="昵称"
          name="nickName"
          rules={[{ required: true, message: "请输入昵称" }]}
        >
          <Input placeholder="请输入昵称" type="text" />
        </Form.Item>

        <Form.Item
          label="手机号"
          name="phone"
          rules={[{ required: true, message: "请输入手机号" }]}
        >
          <Input placeholder="请输入手机号" type="text" />
        </Form.Item>

        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, message: "请输入邮箱" }]}
        >
          <Input placeholder="请输入邮箱" type="text" />
        </Form.Item>
      </Form>
    </>
  );
});

export default Index;
