import Taro from "@tarojs/taro";
/**
 * @description 获取当前页url
 */
export const getCurrentPageUrl = () => {
  let pages = Taro.getCurrentPages();
  let currentPage = pages[pages.length - 1];
  let url = currentPage.route;
  return url;
};

export const pageToLogin = () => {
  // let path = getCurrentPageUrl()
  const token = Taro.getStorageSync("token");
  if (!token) {
    Taro.navigateTo({
      url: "/pages/login/index",
    });
  }
};

// route go
export const route = (url) => {
  try {
    Taro.navigateTo({ url: url });
  } catch (e) {
    console.log(e);
  }
};
