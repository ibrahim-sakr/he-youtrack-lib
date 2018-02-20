const urls = require('../../config/URLs');
const BaseComponent = require('../BaseComponent');
const Builder = require('./Builder');
const Parse = require('../../utils/Parse');

/**
 * class User
 */
class User extends BaseComponent {

    /**
     * @param {object} options
     */
    constructor() {
        super();
        this.url = 'rest/user/';

        // custom Query Builder
        this.builder = new Builder();
    }

    /**
     * get current user profile
     * @returns {Promise<any>}
     */
    profile() {
        return this.get(urls.USER_PROFILE);
    }

    /**
     * get user by it's login name
     * @param {string} name
     * @returns {Promise<any>}
     */
    findByLoginName(name) {
        return this.get(urls.USER_GETBYLOGINNAME + name);
    }

    /**
     * get users saved searchs
     * @param {string} name
     * @returns {Promise<any>}
     */
    savedSearches(name) {
        return this.get(Parse.url(this.options.baseUrl + urls.USER_SAVED_SEARCHES, { name }));
    }

    /**
     * get all Accessible Saved Searches
     * @returns {Promise<any>}
     */
    allSavedSearchesAccessible() {
        return this.get(this.options.baseUrl + urls.ALL_SAVED_SEARCHES_ACCESSIBLE);
    }

    /**
     * get specific search by name
     * @param {string} savedQuery
     * @returns {Promise<any>}
     */
    savedSearchByName(savedQuery) {
        return this.get(Parse.url(this.options.baseUrl + urls.SAVED_SEARCH_BYNAME, { savedQuery }));
    }

    /**
     * get all tags
     * @returns {Promise<any>}
     */
    tags() {
        return this.get(this.options.baseUrl + urls.TAGS);
    }

    /**
     * get tag by it's name
     * @param {string} tag
     * @returns {Promise<any>}
     */
    tagByName(tag) {
        return this.get(Parse.url(this.options.baseUrl + urls.TAG_BY_NAME, { tag }));
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
    updateExistingSavedSearch(savedQuery, {
        newName, projectShortName, visibleForGroup, updatableByGroup, q,
    }) {
        return this.get(Parse.url(this.options.baseUrl + urls.SAVED_SEARCH_BYNAME, {
            savedQuery,
            newName,
            projectShortName,
            visibleForGroup,
            updatableByGroup,
            q,
        }));
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
    updateTag(tag, {
        newName, visibleForGroup, updatableByGroup, untagOnResolve,
    }) {
        return this.get(Parse.url(this.options.baseUrl + urls.UPDATE_TAG, {
            tag,
            newName,
            visibleForGroup,
            updatableByGroup,
            untagOnResolve,
        }));
    }

}

module.exports = User;
