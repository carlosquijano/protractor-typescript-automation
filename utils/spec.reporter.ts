import { DisplayProcessor, SpecReporter } from 'jasmine-spec-reporter';
import SuiteInfo = jasmine.SuiteInfo;


class SpecDisplayProcessor extends DisplayProcessor {
    public displayJasmineStarted(info: SuiteInfo, log: string): string {
        return `TypeScript ${log}`;
    }
}

export let commonSpecReporter = new SpecReporter({
    spec: {
        displayStacktrace: true
    },
    customProcessors: [SpecDisplayProcessor]
});