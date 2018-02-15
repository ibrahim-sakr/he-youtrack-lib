const Parse = require('../../../lib/utils/Parse');
const urls = require('../../../lib/config/URLs');

/**
 * @author Alaa Attya <alaa.attya91@gmail.com>
 */
describe('test parser', () => {

    it('should parse issue search request url', () => {
        expect(Parse.prepareSearchRequestUrl('insurance', ['date', 'name', 'order', 'per'], 15, true))
            .toEqual(`${urls.ISSUE_SEARCH}?filter=insurance&wikifyDescription=false&with=date&with=name&with=order&with=per&max=15&after=true`);
    });

    it('should get valid search url for with parameters', () => {
        expect(Parse.flatternWithFields(['date', 'name', 'order', 'per'])).toEqual('with=date&with=name&with=order&with=per');
    });
});