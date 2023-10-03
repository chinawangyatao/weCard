/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http";

export const wechatlogin = (postData) => {
  return HTTPREQUEST.post("/wechatlogin", postData);
};

export const saveUserInfo = (pramas) => {
  return HTTPREQUEST.post("/we-user/saveUserInfo", pramas);
};
