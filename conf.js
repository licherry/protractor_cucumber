'use strict';
var osName = require('os-name')();

console.log('current os: ', osName);

var chromeDriverPath = './tools/chromedriver_mac32/chromedriver';

if (osName.indexOf('Windows') >= 0) {
    chromeDriverPath = './tools/chromedriver_win32/chromedriver.exe';
} else if (osName.indexOf('Linux') >= 0) {
    chromeDriverPath = './tools/chromedriver_linux64/chromedriver';
}

exports.config = {
    seleniumServerJar: './tools/selenium-server-standalone-2.45.0.jar',
    chromeDriver: chromeDriverPath,
    directConnect: true,

    framework: 'custom',
    frameworkPath: 'protractor-cucumber-framework',
    specs: ['features/*.feature'],

    capabilities: {
        browserName: 'chrome'
    },

    cucumberOpts: {
        format: 'pretty',
        require: 'features/step_definitions'
    },


    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000
    }
}