const urls = require('../config/URLs');

/**
 * class Parse
 * parse any strings
 */
class Parse {

    /**
     * parse url to inject variables and return it
     * @param   {string} url
     * @param   {object} params
     * @returns {string}
     */
    static url(url, params = {}) {
        let arr = url.split('/');
        const paramsKeys = Object.keys(params);
        for (let i = 0; i < paramsKeys.length; i++) {
            if (arr.indexOf('{' + paramsKeys[i] + '}') > -1) {
                arr[arr.indexOf('{' + paramsKeys[i] + '}')] = params[paramsKeys[i]];
            }
        }
        return arr.join('/');
    }

    /**
     * Flattern the `with` fields attributes
     *
     * @param withFields
     * @return {*}
     */
    static flatternWithFields(withFields = []) {
        return withFields.reduce((searchUrl, withField) => {
            let prefix = searchUrl.startsWith('with=') ? '' : 'with=';
            return `${prefix}${searchUrl}&with=${withField}`;
        })
    }

    /**
     * Prepare request url
     *
     * @param filter
     * @param withFields
     * @param max
     * @param after
     * @param wikifyDescription
     *
     * @return {string}
     *
     * @author Alaa Attya <alaa.attya91@gmail.com>
     */
    static prepareSearchRequestUrl(filter, withFields = [], max = 0, after = 0, wikifyDescription = false) {
        let searchUrl = `${urls.ISSUE_SEARCH}?filter=${filter}&wikifyDescription=${wikifyDescription}`;

        if (withFields.length > 0) {
            searchUrl += `&${this.flatternWithFields(withFields)}`;
        }

        if (max !== 0) {
            searchUrl += `&max=${max}`;
        }

        if (after !== 0) {
            searchUrl += `&after=${after}`;
        }

        return searchUrl;
    }
}

module.exports = Parse;
