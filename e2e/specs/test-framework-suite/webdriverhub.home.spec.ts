import { TestSuites } from '../suites';
import { WebDriverHubHomePage } from '../../pages/webdriverhub/webdriverhub.home.page';
import { StepLogger } from '../../../utils/step.logger'

describe(TestSuites.frameworkSuite, () => {

    let pageObject : WebDriverHubHomePage;

    beforeAll(async () => {
        pageObject = new WebDriverHubHomePage();
    });

    beforeEach(async () => {
        pageObject.get();
    });

    it('Verify WebDriverHub is available', async () => {

        // Step 1 -------------------------------------------------------------
        StepLogger.stepInit(1, 'Expect title to be `WebDriver Hub`');
        const subject = await pageObject.getPageTitle();
        expect(subject).toEqual("WebDriver Hub");

        // Step 2 -------------------------------------------------------------
        StepLogger.stepInit(2, 'Expect server info to be present and valid');
        const serverInfo = await pageObject.getServerInfo().getText();
        expect(serverInfo).toBeNonEmptyString();
        StepLogger.debug(`- Server info '${serverInfo}'`);

    });
});