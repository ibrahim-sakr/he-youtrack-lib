const request        = require('request');
const urls           = require('../config/URLs');
const RequestOptions = require('../utils/RequestOptions');
const Parse          = require('./../utils/Parse');

class User
{
    constractor(options = {}) {
        this.options = options;
    }

    // all users endpoints
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

    tagByName(tag) {
        return new Promise((resolve, reject) => {
            const options = RequestOptions.prepare({
                method: 'GET',
                url: Parse.url(this.options.baseUrl + urls.TAG_BY_NAME, {tag}),
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

    updateTag(tag, { newName, visibleForGroup, updatableByGroup, untagOnResolve }) {
        return new Promise((resolve, reject) => {
            const options = RequestOptions.prepare({
                method: 'POST',
                url: Parse.url(this.options.baseUrl + urls.UPDATE_TAG, {tag, newName, visibleForGroup, updatableByGroup, untagOnResolve}),
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
