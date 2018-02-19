const QueryBuilder = require('../builder/QueryBuilder');
const Request = require('request');

/**
 * Base Component
 * @author Ibrahim Sakr <ebrahimes@gmail.com>
 */
class BaseComponent extends QueryBuilder {

    constructor(options = {}, http = Request) {
        super();
        // main options that containes token and baseurl
        this.options = options;

        // inject HTTPLib to use
        this.http = http;
    }

}

module.exports = BaseComponent;
