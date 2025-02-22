export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'your-secret-here'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'your-salt-here'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'your-transfer-salt-here'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
