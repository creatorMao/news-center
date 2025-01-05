const config = {
  port: 3002,
  docUrl: "https://www.yuque.com/5zhimao/fmifvi/gu3gnevsshyeeq7x?singleDoc#",
  showDoc: process.env.NEWS_CENTER_SHOW_DOC,
  checkToken: false,
  secret: "test",
  password: "",
  token: process.env.NEWS_CENTER_TOKEN || "",
};

if (config.token || config.password) {
  config.checkToken = true;
}

export default config;
