'use strict';

/**
 * Videocategories.js controller
 *
 * @description: A set of functions called "actions" for managing `Videocategories`.
 */

module.exports = {

  /**
   * Retrieve videocategories records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.videocategories.search(ctx.query);
    } else {
      return strapi.services.videocategories.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a videocategories record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.videocategories.fetch(ctx.params);
  },

  /**
   * Count videocategories records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.videocategories.count(ctx.query, populate);
  },

  /**
   * Create a/an videocategories record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.videocategories.add(ctx.request.body);
  },

  /**
   * Update a/an videocategories record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.videocategories.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an videocategories record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.videocategories.remove(ctx.params);
  }
};
