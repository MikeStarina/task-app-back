'use strict';

/**
 * passport router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::passport.passport');
