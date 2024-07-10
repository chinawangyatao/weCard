import HTTPREQUEST from "@/servers/http";

export const getUserinfo = (postData) => {
  return HTTPREQUEST.post("/login", postData);
};
