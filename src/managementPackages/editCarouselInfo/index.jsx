import React, { memo } from "react";
import { Grid, Image, SearchBar, Uploader } from "@nutui/nutui-react-taro";
import { Plus, Search2 } from "@nutui/icons-react-taro";

const Index = memo(() => {
  return (
    <>
      <SearchBar shape="round" maxLength={5} />
      <Grid columns={3} style={{ marginTop: "10px" }}>
        <Grid.Item text={"图片名字"}>
          <Image />
        </Grid.Item>
        <Grid.Item text={"图片名字"}>
          <Image />
        </Grid.Item>
        <Grid.Item text={"图片名字"}>
          <Image />
        </Grid.Item>
        <Grid.Item>
          <Uploader uploadIcon={""} uploadLabel={<Plus />} />
        </Grid.Item>
      </Grid>
    </>
  );
});

export default Index;
