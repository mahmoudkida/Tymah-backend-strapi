'use strict';

/**
 * Character.js controller
 *
 * @description: A set of functions called "actions" for managing `Character`.
 */

module.exports = {

  /**
   * Retrieve character records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.character.search(ctx.query);
    } else {
      return strapi.services.character.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a character record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.character.fetch(ctx.params);
  },

  /**
   * Count character records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.character.count(ctx.query, populate);
  },

  /**
   * Create a/an character record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.character.add(ctx.request.body);
  },

  /**
   * Update a/an character record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.character.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an character record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.character.remove(ctx.params);
  }
};
