module.exports = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  future: { webpack5: true, strictPostcssConfiguration: true },
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  images: {
    domains: ["mytwitter.microcms.io", "images.microcms-assets.io", "cdn.shopify.com"],
  },
};
