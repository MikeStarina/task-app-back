'use strict';

/**
 * passport controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::passport.passport');
