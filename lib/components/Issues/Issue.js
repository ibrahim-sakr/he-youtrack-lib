const BaseComponent = require('../BaseComponent');
const Builder = require('./Builder');

/**
 * Issue Component
 * @author Alaa Attya <alaa.attya91@gmail.com>
 */
class Issue extends BaseComponent {

    constructor() {
        super();
        this.url = 'rest/issue/';

        // custom Query Builder
        this.builder = new Builder();
    }

}

module.exports = Issue;
