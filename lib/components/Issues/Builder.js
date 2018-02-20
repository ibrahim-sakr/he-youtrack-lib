/**
 * Issues Builder
 * @author Ibrahim Sakr <ebrahimes@gmail.com>
 */
class Builder {

    /**
     * specify the desired fields to be returned
     * @param fields
     * @returns {Builder}
     * @author Ibrahim Sakr <ebrahimes@gmail.com>
     */
    fields(fields = []) {
        this.queryArr.push(fields.map(field => `with=${field}`).join('&'));
        return this;
    }

    /**
     * skip number of item from the search
     * @param date
     * @returns {Builder}
     * @author Ibrahim Sakr <ebrahimes@gmail.com>
     */
    after(after = 0) {
        this.queryArr.push(`after=${after}`);
        return this;
    }

    /**
     * max number of item to return
     * @param max
     * @returns {Builder}
     * @author Ibrahim Sakr <ebrahimes@gmail.com>
     */
    max(max = 0) {
        this.queryArr.push(`max=${max}`);
        return this;
    }

    /**
     * defines whether the issue description is returned as HTML or plain text.
     * @returns {Builder}
     * @author Ibrahim Sakr <ebrahimes@gmail.com>
     */
    withWikifyDescription() {
        this.queryArr.push('wikifyDescription=true');
        return this;
    }

}

module.exports = Builder;
