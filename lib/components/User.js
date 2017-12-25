const request        = require('request');
const urls           = require('../config/URLs');
const RequestOptions = require('../utils/RequestOptions');
const Parse          = require('./../utils/Parse');

class User
{
    constractor(options = {}){
        this.options = options;
    }

    // all users endpoints
    profile() {
        return new Promise((resolve, reject) => {
            const options = RequestOptions.prepare({
                method: 'GET',
                url: this.options.baseUrl + urls.USER_PROFILE,
                token: this.options.token
            });
            request(options, function (err, res, body) {
                if (err) {
                    reject(err);
                }
                resolve(body);
            });
        });
    }

    findByLoginName(name){
        return new Promise((resolve, reject) => {
            const options = RequestOptions.prepare({
                method: 'GET',
                url: this.options.baseUrl + urls.USER_GETBYLOGINNAME + name,
                token: this.options.token
            });
            request(options, function (err, res, body) {
                if (err) {
                    reject(err);
                }
                resolve(body);
            });
        });
    }

    savedSearches(name){
        return new Promise((resolve, reject) => {
            const options = RequestOptions.prepare({
                method: 'GET',
                url: Parse.url(this.options.baseUrl + urls.USER_SAVED_SEARCHES, { name }),
                token: this.options.token
            });
            request(options, function (err, res, body) {
                if (err) {
                    reject(err);
                }
                resolve(body);
            });
        });
    }
}

module.exports = User;
