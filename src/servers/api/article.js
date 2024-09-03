import HTTPREQUEST from "@/servers/http";

/**
 * @description 查询文章信息
 * @param data {object} 传输参数
 * @param data.Page {number}
 * @param data.PageSize {number}
 * @param data.total {number}
 * @param data.keyword {string} 查询的内容
 * */
export const getCompanyAllArticle = (data) => {
  return HTTPREQUEST.get("/biz/article/w/list", data);
};

/**
 * @description 查询文章详情
 * @param data {object} 传输参数
 * @param data.Page {number}
 * @param data.PageSize {number}
 * @param data.total {number}
 * @param data.keyword {string} 查询的内容
 * */
export const getArticleById = (data) => {
  return HTTPREQUEST.get("/biz/article/queryCompanyArticleByIdWeChat", data);
};
