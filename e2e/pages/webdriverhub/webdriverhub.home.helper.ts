import { WebDriverHubHomePage } from "./webdriverhub.home.page";
import { BaseHelper } from "../../helpers/base.helper";
import { StepLogger } from "../../../utils/step.logger";

export class WebDriverHuhHomeHelper extends BaseHelper {

    static async openCreateSessionDialog() {
        return this.clickElement(WebDriverHubHomePage.createSessionButton).then(() => {
            StepLogger.debug('`Create Session` dialog opened');
        });
    }

    static async closeCreateSessionDialog() {
        return this.clickElement(WebDriverHubHomePage.cancelButton).then(() => {
            StepLogger.debug('`Create Session` dialog closed by cancel');
        });
    }

    static async verifyCreateSessionDialogIsDisplayed() {
        return this.waitForElementToBeVisible(WebDriverHubHomePage.createSessionDialog);
    }

    static async verifyDeleteSessionDialogIsDisplayed() {
        return this.waitForElementToBeVisible(WebDriverHubHomePage.createSessionDialog);
    }

    static async selectChromeInCreateSessionDialog() {
        return this.clickElement(WebDriverHubHomePage.chromeBrowserOption).then(() => {
            StepLogger.debug('`chromeBrowserOption` clicked');
        });
    }

    static async verifyAtLeastOneBrowserSessionAvailableInContainer() {
        this.waitForElementToBeVisible(WebDriverHubHomePage.sessionTabBar).then(() => {
            expect(WebDriverHubHomePage.sessionAllTabs.count()).toBeGreaterThan(0);
        });
    }

    static async refreshSessions() {
        return WebDriverHuhHomeHelper.clickElement(WebDriverHubHomePage.refreshSessionButton);
    }
}