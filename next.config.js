module.exports = {
  assetPrefix: "/shoptalk",
  publicRuntimeConfig: {
    basePath: "/shoptalk",
  },
  reactStrictMode: true,
  images: {
    domains: ["shoptalk.ghost.io", "static.ghost.org"],
    loader: "imgix",
    path: "https://noop/",
  },
  env: {
    NEXT_PUBLIC_MAILCHIMP_URL:
      "https://stockwiseauto.us1.list-manage.com/subscribe/post?u=c3221d76ae424d72b6873aa16&amp;id=73456a1b07",
  },
};
