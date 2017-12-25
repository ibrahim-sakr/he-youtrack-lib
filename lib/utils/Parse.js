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
}

module.exports = Parse;
