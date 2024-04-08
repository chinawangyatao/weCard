/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http";

export const wechatlLogin = (postData) => {
  return HTTPREQUEST.post("/login", postData);
};

export const saveUserInfo = (params) => {
  return HTTPREQUEST.post("/we-user/saveUserInfo", params);
};

// 查询用户信息
export const getUserInfo = (params) => {
  return HTTPREQUEST.get("/we-user/getUserInfo", params);
};
