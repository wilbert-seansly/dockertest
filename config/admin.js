module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cdcca31a0894ae9821abc387b7fef9b5'),
  },
});
