import { TestSuites } from '../suites';
import { WebDriverHubHomePage } from '../../pages/webdriverhub/webdriverhub.home.page';
import { Logger as stepLogger } from '../../utils/logger'

describe(TestSuites.frameworkSuite, () => {

    let webDriverHubHome : WebDriverHubHomePage;

    beforeAll(async () => {
        webDriverHubHome = new WebDriverHubHomePage();
    });

    beforeEach(async () => {
        webDriverHubHome.get();
    });

    it('Verify WebDriverHub is available', async () => {

        // Step 1 -------------------------------------------------------------
        stepLogger.stepInit(1, 'Expect title to be `WebDriver Hub`');
        let subject = await webDriverHubHome.getPageTitle();
        expect(subject).toEqual("WebDriver Hub");

        // Step 2 -------------------------------------------------------------
        stepLogger.stepInit(2, 'Expect server info to be present and valid');
        let serverInfo = await webDriverHubHome.getServerInfo().getText();
        expect(serverInfo).toBeNonEmptyString();
        stepLogger.info(`- Server info ${serverInfo}`);

    });
});