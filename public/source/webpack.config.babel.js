/**
 * Created by IlyaLitvinov on 17.01.17.
 */
"use strict";
const _ = require("lodash");
const path = require("path");

const _configs = {
    global: require(path.normalize(__dirname + "/config/global")),
    dev: require(path.normalize(__dirname + "/config/dev")),
    build: require(path.normalize(__dirname + "/config/build"))
};

const _load = env => {
    if(!env) {
        throw 'Can\'t find local environment variable via process.env.NODE_ENV';
    }
    if(!_configs[env]) {
        throw 'Can\'t find environments see _config object';
    }

    return _configs && _.merge(_configs[env](__dirname), _configs["global"](__dirname));
};

/**
 * Export WebPack config
 * @type {[type]}
 */

module.exports = _load(process.env.NODE_ENV);