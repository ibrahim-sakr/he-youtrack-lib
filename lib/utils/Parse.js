class Parse {
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
