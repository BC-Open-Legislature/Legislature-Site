module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.leg.bc.ca',
    ],
  },
  headers: async () => (
    [
      {
        source: '/api',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          },
        ],
      },
    ]
  ),
};
