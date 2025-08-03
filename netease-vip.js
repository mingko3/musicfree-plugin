export default {
  name: "网易云VIP解锁插件",
  version: "1.0.0",
  author: "mingko3",
  supportPlatform: ["netease"],
  async onRequest(ctx) {
    const url = "https://server-production-266f.up.railway.app" + ctx.url;
    const res = await fetch(url, {
      method: ctx.method,
      headers: ctx.headers,
      body: ctx.body,
    });
    ctx.status = res.status;
    ctx.body = res.body;
    ctx.headers = res.headers;
  },
};
