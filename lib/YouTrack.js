const componentsArray = require('./config/componentsArray');

class YouTrack
{
    constructor(options = {}) {
        if (!this.validateOptions(options)) {
            throw new Error('please make sure alloptions is correct');
        }

        this.options = options;
        this.components = {};

        // load defualt components
        this.loadDefualt(componentsArray);

        // wrap the instance of YouTrackwith a Proxy to make it more friendly
        // calling YouTrack.prop => return YouTrack.components[prop]
        return new Proxy(this, {
            get: function(obj, prop) {
                return obj.components[prop];
            }
        });
    }

    loadDefualt(components){
        if (components.length) {
            for (const i of components) {
                const mod = require(i);
                this.registerComponent(new mod(this.options));
            }
        }
    }

    validateOptions(options = {}){
        if (!options.baseUrl) {
            return false;
        };
        if (!options.token) {
            return false;
        };
        return true;
    }

    registerComponent(componentModule){
        const componentName = componentModule.constructor.name.toLowerCase();

        // assign the options to the module
        componentModule.options = this.options;

        // finally add the module instance to Components
        this.components[componentName] = componentModule;

        return this;
    }

    removeComponent(componentModule){
        const componentName = componentModule.constructor.name.toLowerCase();
        delete this.components[componentName];

        return this;
    }

    isRegisterd(componentName){
        return (this.components[componentName.toLowerCase()]) ? true : false;
    }
}

module.exports = YouTrack;
