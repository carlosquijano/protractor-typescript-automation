import { StepLogger } from "../../../utils/step.logger";
import { BaseHelper } from "../../helpers/base.helper";
import { WebDriverHubHomePage } from "./webdriverhub.home.page";

export class WebDriverHuhHomeHelper extends BaseHelper {

    public static async openCreateSessionDialog() {
        StepLogger.debug("`Create Session` dialog opened");
        return this.clickElement(WebDriverHubHomePage.createSessionButton);
    }

    public static async closeCreateSessionDialog() {
        StepLogger.debug("`Create Session` dialog closed by cancel");
        return this.clickElement(WebDriverHubHomePage.cancelButton);
    }

    public static async verifyCreateSessionDialogIsDisplayed() {
        return this.waitForElementToBeVisible(WebDriverHubHomePage.createSessionDialog);
    }

    public static async verifyDeleteSessionDialogIsDisplayed() {
        return this.waitForElementToBeVisible(WebDriverHubHomePage.createSessionDialog);
    }

    public static async selectChromeInCreateSessionDialog() {
        StepLogger.debug("`chromeBrowserOption` clicked");
        return this.clickElement(WebDriverHubHomePage.chromeBrowserOption);
    }

    public static async refreshSessions() {
        return WebDriverHuhHomeHelper.clickElement(WebDriverHubHomePage.refreshSessionButton);
    }

    public static async verifyAtLeastOneBrowserSessionAvailableInContainer() {
        await this.waitForElementToBeVisible(WebDriverHubHomePage.sessionTabBar);
        expect(WebDriverHubHomePage.sessionAllTabs.count()).toBeGreaterThan(0);
    }
}
