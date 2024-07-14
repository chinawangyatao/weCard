import HTTPREQUEST from "@/servers/http";

/**
 * @description 查询文章信息
 * @param data {{arType:string,page:number,pageSize:number}}
 *  arType  栏目的ID
 *  page 页面
 *  pageSize 每页大小
 * */
export const getCompanyBaseInfo = (data) => {
  return HTTPREQUEST.get("/wechat//companyArticle/getCaList", data);
};
