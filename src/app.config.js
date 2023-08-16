export default defineAppConfig({
  pages: [
    "pages/home/index",
    "pages/case/index",
    "pages/appointment/index",
    "pages/technology/index",
    "pages/index/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: "custom",
  },
  tabBar: {
    color: "#fff",
    backgroundColor: "#0D110f",
    selectedColor: "#3fa6ad",
    list: [
      { pagePath: "pages/home/index", text: "首页" },
      { pagePath: "pages/technology/index", text: "诊疗技术" },
      { pagePath: "pages/case/index", text: "优秀案例" },
      { pagePath: "pages/appointment/index", text: "预约" },
    ],
  },
});
