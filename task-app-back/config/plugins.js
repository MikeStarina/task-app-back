module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.yandex.ru'),
        port: env('SMTP_PORT', 465),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'studio@pnhd.ru',
        defaultReplyTo: 'studio@pnhd.ru',
      },
    },
  },
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '1y',
      },
    },
  },
});
