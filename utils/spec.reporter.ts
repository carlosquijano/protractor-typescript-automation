import {SpecReporter} from "jasmine-spec-reporter";

export const commonSpecReporter = new SpecReporter({
    spec: {
        displayDuration: true,
        displayFailed: true,
        displayPending: true,
        displayStacktrace: true,
        displaySuccessful: true,
    },
});
