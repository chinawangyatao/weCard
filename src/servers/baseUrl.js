const getBaseUrl = (url) => {
  // let BASE_URL = "http://mdh6g8.natappfree.cc" + "/api/v1";
  let BASE_URL = "http://127.0.0.1:9091" + "/mini/api";
  // if (process.env.NODE_ENV === 'development') {
  //   //开发环境 - 根据请求不同返回不同的BASE_URL
  //   if (url.includes('/api/')) {
  //     BASE_URL = ''
  //   } else if (url.includes('/iatadatabase/')) {
  //     BASE_URL = ''
  //   }
  // } else {
  //   // 生产环境
  //   if (url.includes('/api/')) {
  //     BASE_URL = ''
  //   } else if (url.includes('/iatadatabase/')) {
  //     BASE_URL = ''
  //   }
  // }
  return BASE_URL;
};

export default getBaseUrl;
