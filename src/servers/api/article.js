import HTTPREQUEST from "@/servers/http";

/**
 * @description 查询文章信息
 * @param data {{Page:number,  PageSize:number,total:number,keyword:string}}
 * */
export const getCompanyAllArticle = (data) => {
  return HTTPREQUEST.get(
    "/wechat/companyArticle/queryWechatCompanyAllArticle",
    data
  );
};
