const request = require('request');
const RequestOptions = require('../utils/RequestOptions');
const Parse = require('../utils/Parse');

/**
 * @author Alaa Attya <alaa.attya91@gmail.com>
 */
class Issue {

    /**
     * @param {object} options
     *
     * @author Alaa Attya <alaa.attya@tajawal.com>
     */
    constractor(options = {}) {
        this.options = options;
    }

    /**
     * Search issues
     *
     * @param {String} filter
     * @param {Array} withFields
     * @param {Number} max
     * @param {Number} after
     * @param {Boolean} wikifyDescription
     *
     * @return {Array}
     *
     * @author Alaa Attya <alaa.attya@tajawal.com>
     */
    search(filter, withFields = [], max = 0, after = 0, wikifyDescription = false) {
        const searchUrl = Parse.prepareSearchRequestUrl(filter, withFields, max, after, wikifyDescription);

        return new Promise((resolve, reject) => {
            const options = RequestOptions.prepare({
                method: 'GET',
                url: this.options.baseUrl + searchUrl,
                token: this.options.token,
            });

            request(options, (err, res, body) => {
                if (err) {
                    reject(err);
                }
                resolve(body);
            });
        });
    }
}

module.exports = Issue;
