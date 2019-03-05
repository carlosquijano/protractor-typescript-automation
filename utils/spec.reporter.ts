import { DisplayProcessor, SpecReporter } from 'jasmine-spec-reporter';
import SuiteInfo = jasmine.SuiteInfo;

export let commonSpecReporter = new SpecReporter({
    spec: {
        displayStacktrace : true,
        displayFailed : true,
        displaySuccessful : true,
        displayPending : true,
        displayDuration : true
    }
});