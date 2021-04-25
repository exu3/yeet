module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/register",
        permanent: true,
      },
    ];
  },
};
