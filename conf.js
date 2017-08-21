'use strict';
var osName = require('os-name')();

console.log('current os: ', osName);

var chromeDriverPath = './tools/chromedriver_mac32/chromedriver_2.31';

if (osName.indexOf('Windows') >= 0) {
    chromeDriverPath = './tools/chromedriver_win32/chromedriver.exe';
} else if (osName.indexOf('Linux') >= 0) {
    chromeDriverPath = './tools/chromedriver_linux64/chromedriver';
}

exports.config = {
    seleniumServerJar: './tools/selenium-server-standalone-3.5.1.jar',
    chromeDriver: chromeDriverPath,
    directConnect: true,

    framework: 'custom',
    frameworkPath: 'protractor-cucumber-framework',
    specs: ['features/*.feature'],
    baseUrl: 'http://juliemr.github.io',

    capabilities: {
        browserName: 'chrome'
    },

    cucumberOpts: {
        format: 'json',
        require:['features/step_definitions/*.js','support/*.js'],
        failFast: false,
        timeout: 20000,
        ignoreUndefinedDefinitions: false
    },

    onComplete: function () {
        console.log('all done');
        browser.driver.close();
    }
};