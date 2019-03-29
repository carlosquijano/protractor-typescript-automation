import { Config } from "protractor";
import { commonSpecReporter} from "./utils/spec.reporter";

export let config: Config = {
    baseUrl: "http://localhost:4444",
    capabilities: {
        browserName: "chrome",
    },
    framework: "jasmine",
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        showColors: true,
        print() { // empty
        },
    },
    onPrepare: () => {
        require("jasmine-expect");
        const globals = require("protractor");
        const browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        jasmine.getEnv().addReporter(commonSpecReporter);
    },
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ["./e2e/specs/**/*.spec.js"],
};
