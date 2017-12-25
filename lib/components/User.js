const request = require('request');
const urls = require('../config/URLs');
const RequestOptions = require('../utils/RequestOptions');
const Parse = require('./../utils/Parse');

/**
 * class User
 */
class User {

  /**
   * @param {object} options
   */
  constractor(options = {}) {
    this.options = options;
  }

  /**
   * get current user profile
   * @returns {Promise<any>}
   */
  profile() {
    return new Promise((resolve, reject) => {
      const options = RequestOptions.prepare({
        method: 'GET',
        url: this.options.baseUrl + urls.USER_PROFILE,
        token: this.options.token
      });

      request(options, function (err, res, body) {
        if (err) {
          reject(err);
        }
        resolve(body);
      });
    });
  }

  /**
   * get user by it's login name
   * @param {string} name
   * @returns {Promise<any>}
   */
  findByLoginName(name) {
    return new Promise((resolve, reject) => {
      const options = RequestOptions.prepare({
        method: 'GET',
        url: this.options.baseUrl + urls.USER_GETBYLOGINNAME + name,
        token: this.options.token
      });
      request(options, function (err, res, body) {
        if (err) {
          reject(err);
        }
        resolve(body);
      });
    });
  }

  /**
   * get users saved searchs
   * @param {string} name
   * @returns {Promise<any>}
   */
  savedSearches(name) {
    return new Promise((resolve, reject) => {
      const options = RequestOptions.prepare({
        method: 'GET',
        url: Parse.url(this.options.baseUrl + urls.USER_SAVED_SEARCHES, { name }),
        token: this.options.token
      });
      request(options, function (err, res, body) {
        if (err) {
          reject(err);
        }
        resolve(body);
      });
    });
  }

  /**
   * get all Accessible Saved Searches
   * @returns {Promise<any>}
   */
  allSavedSearchesAccessible() {
    return new Promise((resolve, reject) => {
      const options = RequestOptions.prepare({
        method: 'GET',
        url: this.options.baseUrl + urls.ALL_SAVED_SEARCHES_ACCESSIBLE,
        token: this.options.token
      });
      request(options, function (err, res, body) {
        if (err) {
          reject(err);
        }
        resolve(body);
      });
    });
  }

  /**
   * get specific search by name
   * @param {string} savedQuery
   * @returns {Promise<any>}
   */
  savedSearchByName(savedQuery) {
    return new Promise((resolve, reject) => {
      const options = RequestOptions.prepare({
        method: 'GET',
        url: Parse.url(this.options.baseUrl + urls.SAVED_SEARCH_BY_NAME, { savedQuery }),
        token: this.options.token
      });
      request(options, function (err, res, body) {
        if (err) {
          reject(err);
        }
        resolve(body);
      });
    });
  }

  /**
   * update existing saved search
   * @param savedQuery
   * @param newName
   * @param projectShortName
   * @param visibleForGroup
   * @param updatableByGroup
   * @param q
   * @returns {Promise<any>}
   */
  updateExistingSavedSearch(savedQuery, { newName, projectShortName, visibleForGroup, updatableByGroup, q }) {
    return new Promise((resolve, reject) => {
      const options = RequestOptions.prepare({
        method: 'POST',
        url: Parse.url(this.options.baseUrl + urls.SAVED_SEARCH_BY_NAME, {
          savedQuery,
          newName,
          projectShortName,
          visibleForGroup,
          updatableByGroup,
          q,
        }),
        token: this.options.token
      });
      request(options, function (err, res, body) {
        if (err) {
          reject(err);
        }
        resolve(body);
      });
    });
  }

  /**
   * get all tags
   * @returns {Promise<any>}
   */
  tags() {
    return new Promise((resolve, reject) => {
      const options = RequestOptions.prepare({
        method: 'GET',
        url: this.options.baseUrl + urls.TAGS,
        token: this.options.token
      });
      request(options, function (err, res, body) {
        if (err) {
          reject(err);
        }
        resolve(body);
      });
    });
  }

  /**
   * get tag by it's name
   * @param {string} tag
   * @returns {Promise<any>}
   */
  tagByName(tag) {
    return new Promise((resolve, reject) => {
      const options = RequestOptions.prepare({
        method: 'GET',
        url: Parse.url(this.options.baseUrl + urls.TAG_BY_NAME, { tag }),
        token: this.options.token
      });
      request(options, function (err, res, body) {
        if (err) {
          reject(err);
        }
        resolve(body);
      });
    });
  }

  /**
   * update tag by it's name
   * @param tag
   * @param newName
   * @param visibleForGroup
   * @param updatableByGroup
   * @param untagOnResolve
   * @returns {Promise<any>}
   */
  updateTag(tag, { newName, visibleForGroup, updatableByGroup, untagOnResolve }) {
    return new Promise((resolve, reject) => {
      const options = RequestOptions.prepare({
        method: 'POST',
        url: Parse.url(this.options.baseUrl + urls.UPDATE_TAG, {
          tag,
          newName,
          visibleForGroup,
          updatableByGroup,
          untagOnResolve
        }),
        token: this.options.token
      });
      request(options, function (err, res, body) {
        if (err) {
          reject(err);
        }
        resolve(body);
      });
    });
  }
}

module.exports = User;
