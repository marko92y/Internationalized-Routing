module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "sr"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: '/profil/moji-podaci/lista/:path',
        destination: '/profile/my-data/list/:path',
      },
      {
        source: '/registracija/korak-1/:path',
        destination: '/registration/step-a/:path',
      },
    ]
  },
}
