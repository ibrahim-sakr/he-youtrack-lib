const RequestOptions = require('../utils/RequestOptions');

/**
 * Query Builder
 * @author Ibrahim Sakr <ebrahimes@gmail.com>
 */
class QueryBuilder {

    constructor() {
        this.queryArr = [];

        return new Proxy(this, {
            get: (target, prop, receiver) => {
                if (target[prop]) {
                    return Reflect.get(target, prop, receiver);
                }

                return target.builder[prop];
            },
        });
    }

    /**
     * list all
     * @returns {Array}
     */
    all() {
        return ['hema'];
    }

    /**
     * find specific item with ID
     * @param id
     * @returns {Object}
     */
    find(id = '') {
        return { id };
    }

    /**
     * filter the search results
     * @param filter
     * @returns {BaseComponent}
     */
    filter(filter = '') {
        this.queryArr.push(`filter=${filter}`);
        return this;
    }

    /**
     * complete generating the final URL
     * @returns {string}
     */
    prepareParams() {
        if (this.queryArr.length) {
            return `?${this.queryArr.join('&')}`;
        }
        return '';
    }

    /**
     * fetch the results
     * @returns {Promise}
     */
    get(customUrl = '', method = '') {
        // prepare url
        const params = this.prepareParams();
        return new Promise((resolve, reject) => {
            const options = RequestOptions.prepare({
                method: method || 'GET',
                url: `${this.options.baseUrl}/${customUrl || this.url}${params}`,
                token: this.options.token,
            });

            this.http(options, (err, res, body) => {
                if (err) {
                    return reject(err);
                }
                return resolve(JSON.parse(body));
            });
        });
    }

}

module.exports = QueryBuilder;
