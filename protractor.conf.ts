import { Config } from 'protractor';

let commonSpecReporter = require('./utils/spec.reporter').commonSpecReporter;

export let config: Config = {
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        showColors: true,
        print: function() {}
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:4444',
    specs: ['./e2e/specs/**/*.spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare: () => {
        require('jasmine-expect');
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        jasmine.getEnv().addReporter(commonSpecReporter)
    }
}