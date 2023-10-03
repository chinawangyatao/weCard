export default defineAppConfig({
  pages: [
    // "pages/card/index",
    "pages/home/index",
    "pages/case/index",
    "pages/technology/index",
    "pages/index/index",
    "pages/mine/index",
  ],
  subPackages: [
    {
      root: "packages",
      pages: [
        "appointment/index",
        "technicalDetails/index",
        "newsDetails/index",
        "caseDetails/index",
      ],
      independent: true,
    },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#86888C",
    backgroundColor: "white",
    selectedColor: "#000",
    list: [
      { pagePath: "pages/home/index", text: "首页" },
      { pagePath: "pages/technology/index", text: "诊疗技术" },
      { pagePath: "pages/case/index", text: "优秀案例" },
      { pagePath: "pages/mine/index", text: "我的" },
    ],
  },
});
