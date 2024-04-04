module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      header: '*',
      origin: ['http://pnhdstudioapi.ru', 'http://localhost:5173', 'http://localhost:3000', 'http://localhost:1337', 'https://tasks-app-xi-two.vercel.app', 'http://194.58.122.162:1337']
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
