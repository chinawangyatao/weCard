import React from "react";
import "./caseCard.scss";
import { Empty, Grid, Image } from "@nutui/nutui-react-taro";
import { route } from "@/servers/utils";

const Index = (props) => {
  const { caseDetailList, pkId } = props;

  const getDetail = (id) => {
    route(`/packages/caseDetails/index?id=${id}&pkId=${pkId}`);
  };
  console.log(caseDetailList);

  return (
    <>
      {caseDetailList.length ? (
        <div className={"caseCardContainer"}>
          <Grid columns={2}>
            {caseDetailList.map((i) => {
              return (
                <Grid.Item text={i.title} onClick={() => getDetail(i.id)}>
                  <Image
                    height={95}
                    width={90}
                    className={"image"}
                    src={i.coverImg}
                    mode={"aspectFill"}
                    radius={"10%"}
                  />
                </Grid.Item>
              );
            })}
          </Grid>
        </div>
      ) : (
        <>
          <Empty description="无数据" style={{ marginTop: "10px" }} />
        </>
      )}
    </>
  );
};

export default React.memo(Index);
