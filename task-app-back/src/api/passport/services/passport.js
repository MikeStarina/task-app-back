'use strict';

/**
 * passport service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::passport.passport');
