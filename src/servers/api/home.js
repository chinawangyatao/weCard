import HTTPREQUEST from "@/servers/http";

//获取Banner列表
export const getBannerList = () => {
  return HTTPREQUEST.get("/company/banner/getWeChatCompanyBannerList");
};

//查询企业基本信息
export const getCompanyBaseInfo = () => {
  return HTTPREQUEST.get("/company/getWeChatCompanyBaseInfo");
};
