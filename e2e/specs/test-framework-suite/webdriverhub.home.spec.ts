import { TestSuites } from '../suites';
import { WebDriverHubHomePage } from '../../pages/webdriverhub/webdriverhub.home.page';
import { WebDriverHuhHomeHelper } from '../../pages/webdriverhub/webdriverhub.home.helper';
import { StepLogger } from '../../../utils/step.logger'

describe(TestSuites.frameworkSuite, () => {

    beforeEach(async () => {
        WebDriverHubHomePage.get();
    });

    it('Verify WebDriverHub is OK', async () => {

        // Step 1 -------------------------------------------------------------
        StepLogger.stepInit(1, 'Expect title to be `WebDriver Hub`');
        expect(await WebDriverHubHomePage.pageTitle).toEqual("WebDriver Hub");

        // Step 2 -------------------------------------------------------------
        StepLogger.stepInit(2, 'Expect server info to be valid');
        expect(await WebDriverHubHomePage.serverInfo.getText()).toBeNonEmptyString();
        
        // Step 3 -------------------------------------------------------------
        StepLogger.stepInit(3, 'Expect important elements to be present and visible');
        expect(await WebDriverHubHomePage.createSessionButton.isPresent).toBeTruthy();
        
    });

    it ('Verify `Create Session` dialog is operational', async() => {

        // Step 1 -------------------------------------------------------------
        StepLogger.stepInit(1, 'Click `Create Session` dialog');
        await WebDriverHuhHomeHelper.openCreateSessionDialog();
        await WebDriverHuhHomeHelper.verifyCreateSessionDialogIsDisplayed();
        expect(WebDriverHubHomePage.createSessionDialog.isDisplayed).toBeTruthy;

        // Step 2 -------------------------------------------------------------
        StepLogger.stepInit(2, 'Verify browser list select option');
        await WebDriverHuhHomeHelper.selectChromeInCreateSessionDialog();
        
        // Step 3 -------------------------------------------------------------
        StepLogger.stepInit(3, 'Exit `Create Session` dialog');
        await WebDriverHuhHomeHelper.closeCreateSessionDialog();
        expect(WebDriverHubHomePage.createSessionDialog.isDisplayed).toBeFalsy;

    });
});