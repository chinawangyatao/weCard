import HTTPREQUEST from "@/servers/http";

// 获取分类列表
export const getCaseList = () => {
  return HTTPREQUEST.get("/caseType/getCaseTypeWeChatList");
};

/**
 * @description 微信获取案例详情列表
 * @param data {pkId:string}
 * */
export const getCaseDetailList = (data) => {
  return HTTPREQUEST.get("/caseTypeDetail/getWechatCaseTypeDetailList", data);
};

/**
 * @description 微信通过 id 获取案例详情
 * @param id string
 * */
export const getCaseDetailById = (id) => {
  return HTTPREQUEST.get(
    "/caseTypeDetail/getWechatCaseTypeDetailArticleById",
    id
  );
};
