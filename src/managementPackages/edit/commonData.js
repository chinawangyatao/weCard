// 列表数据
import { ArrowRight } from "@nutui/icons-react-taro";

export const cellList = [
  {
    id: 0,
    title: "基本信息",
    extra: (
      <>
        <span style={{ marginRight: "5px" }}>设置基本信息</span>
        <ArrowRight size={14} />
      </>
    ),
    link: "/managementPackages/editUserInfo/index",
  },
  {
    id: 1,
    title: "轮播组",
    extra: (
      <>
        <span style={{ marginRight: "5px" }}>设置首页轮播</span>
        <ArrowRight size={14} />
      </>
    ),
    link: "/managementPackages/editCarouselInfo/index",
  },
  {
    id: 2,
    title: "简介组",
    extra: (
      <>
        <span style={{ marginRight: "5px" }}>设置简介信息</span>
        <ArrowRight size={14} />
      </>
    ),
    link: "/managementPackages/editIntroductionInfo/index",
  },
  {
    id: 3,
    title: "图片组",
    extra: (
      <>
        <span style={{ marginRight: "5px" }}>设置图片信息</span>
        <ArrowRight size={14} />
      </>
    ),
    link: "/managementPackages/editPictureInfo/index",
  },
  {
    id: 4,
    title: "技术组",
    extra: (
      <>
        <span style={{ marginRight: "5px" }}>设置技术信息</span>
        <ArrowRight size={14} />
      </>
    ),
    link: "/managementPackages/editTechnicalInfo/index",
  },
  {
    id: 5,
    title: "新闻组",
    extra: (
      <>
        <span style={{ marginRight: "5px" }}>设置新闻信息</span>
        <ArrowRight size={14} />
      </>
    ),
    link: "/managementPackages/editNewsInfo/index",
  },
  {
    id: 6,
    title: "类目组",
    extra: (
      <>
        <span style={{ marginRight: "5px" }}>设置类目信息</span>
        <ArrowRight size={14} />
      </>
    ),
    link: "/managementPackages/editCategoryInfo/index",
  },
  {
    id: 7,
    title: "案例组",
    extra: (
      <>
        <span style={{ marginRight: "5px" }}>设置案例信息</span>
        <ArrowRight size={14} />
      </>
    ),
    link: "/managementPackages/editCaseInfo/index",
  },
];
