/**
 * class RequestOptions
 * modify any options that will send with the requests
 */
class RequestOptions {

  /**
   * prepare the options that will send with every request
   * @param method
   * @param url
   * @param token
   * @param headers
   * @returns {object}
   */
  static prepare({ method, url, token, headers }) {
    if (!method) {
      throw new Error('the method should be provided');
    }

    if (!url) {
      throw new Error('URL should be provided');
    }

    return {
      method: method || 'GET',
      url: url || '',
      headers: headers || {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
      }
    };
  }
}

module.exports = RequestOptions;
