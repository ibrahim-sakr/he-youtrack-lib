/* eslint-disable no-param-reassign */
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
            throw new Error('please make sure all options is correct');
        }

        this.options = options;
        this.components = {};

        // load default components
        this.loadDefault(componentsArray);

        // wrap the instance of YouTrack with a Proxy to make it more friendly
        // calling YouTrack.prop => return YouTrack.components[prop]
        return new Proxy(this, {
            get: (obj, prop) => obj.components[prop],
        });
    }

    /**
     * load default Components as defined in config/componentsArray.js
     * @param {Array} components
     * @return void
     */
    loadDefault(components = []) {
        if (components.length) {
            for (const i of components) {
                const Mod = require(i);
                this.registerComponent(new Mod(this.options));
            }
        } else {
            throw new Error('please pass array og components paths');
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

        // check if it registered before
        if (this.isRegistered(componentName)) {
            throw new Error(`Component ${componentName} is registered before, please remove it before reRegister it`);
        }

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
    isRegistered(componentName) {
        return !!(this.components[componentName.toLowerCase()]);
    }

}

module.exports = YouTrack;
