/**
 * User Builder
 * @author Ibrahim Sakr <ebrahimes@gmail.com>
 */
class Builder {

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

}

module.exports = Builder;
