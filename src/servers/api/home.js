import HTTPREQUEST from "@/servers/http";

//获取Banner列表
export const getBannerList = () => {
  return HTTPREQUEST.get("/biz/banner/getActiveCompanyBanners");
};

//查询企业基本信息
export const getCompanyBaseInfo = () => {
  return HTTPREQUEST.get("/biz/baseInfo/queryCompanyBaseInfoWeChat");
};
