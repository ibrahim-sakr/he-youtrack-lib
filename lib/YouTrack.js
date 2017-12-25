const componentsArray = require('./config/componentsArray');

/**
 * class YouTrack
 * the main Class for YouTrack SDK
 */
class YouTrack {

  /**
   * init YouTrack
   * @param   {object} options the required options for the YouTrack
   * @returns {YouTrack}
   */
  constructor(options = {}) {
    if (!this.validateOptions(options)) {
      throw new Error('please make sure alloptions is correct');
    }

    this.options = options;
    this.components = {};

    // load defualt components
    this.loadDefualt(componentsArray);

    // wrap the instance of YouTrack with a Proxy to make it more friendly
    // calling YouTrack.prop => return YouTrack.components[prop]
    return new Proxy(this, {
      get: function (obj, prop) {
        return obj.components[prop];
      }
    });
  }

  /**
   * load default Components as defined in config/componentsArray.js
   * @param {array} components
   * @return void
   */
  loadDefualt(components = []) {
    if (components.length) {
      for (const i of components) {
        const mod = require(i);
        this.registerComponent(new mod(this.options));
      }
    }
  }

  /**
   * validate
   * @param   {object} options the options that will be validated
   * @returns {boolean}
   */
  validateOptions(options = {}) {
    if (!options.baseUrl) {
      return false;
    }

    if (!options.token) {
      return false;
    }

    return true;
  }

  /**
   * load specific component
   * @param   {object} componentModule
   * @returns {YouTrack}
   */
  registerComponent(componentModule) {
    const componentName = componentModule.constructor.name.toLowerCase();

    // assign the options to the module
    componentModule.options = this.options;

    // finally add the module instance to Components
    this.components[componentName] = componentModule;

    return this;
  }

  /**
   * remove specific component
   * @param   {object} componentModule
   * @returns {YouTrack}
   */
  removeComponent(componentModule) {
    const componentName = componentModule.constructor.name.toLowerCase();
    delete this.components[componentName];

    return this;
  }

  /**
   * check if specific component is loaded
   * @param   {string} componentName
   * @returns {boolean}
   */
  isRegisterd(componentName) {
    return !!(this.components[componentName.toLowerCase()]);
  }
}

module.exports = YouTrack;
