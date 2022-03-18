module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '28dd44cf0c6bf197325e16f84756c6e6'),
  },
});
