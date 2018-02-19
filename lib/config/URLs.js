/**
 * consts for APIs urls
 * @type {object}
 */
module.exports = {
    USER_PROFILE: 'rest/user/current',
    USER_GETBYLOGINNAME: 'rest/user/',
    USER_SAVED_SEARCHES: 'rest/user/{name}/filter',
    ALL_SAVED_SEARCHES_ACCESSIBLE: 'rest/user/search',
    SAVED_SEARCH_BYNAME: 'rest/user/search/{savedQuery}',
    UPDATE_EXISTING_SAVED_SEARCH: 'rest/user/search/{savedQuery}?{newName}&{projectShortName}&{visibleForGroup}&{updatableByGroup}&{q}',
    TAGS: 'rest/user/tag',
    TAG_BY_NAME: 'rest/user/tag/{tag}',
    UPDATE_TAG: 'rest/user/tag/{tag}?{newName}&{visibleForGroup}&{updatableByGroup}&{untagOnResolve}',

    ISSUE_SEARCH: 'rest/issue',
};
