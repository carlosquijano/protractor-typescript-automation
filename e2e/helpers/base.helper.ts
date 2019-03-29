import {browser, ElementFinder, protractor} from "protractor";

export class BaseHelper {

    public static readonly DEFAULT_TIMEOUT = 5000;

    public static async isElementClickable(locator: ElementFinder) {
        return this.EC.elementToBeClickable(locator);
    }

    public static async waitForElementToBeClickable(
        locator: ElementFinder, timeout: number = BaseHelper.DEFAULT_TIMEOUT) {
        return browser.wait(this.isElementClickable(locator), timeout);
    }

    public static async waitForElementToBeVisible(
        locator: ElementFinder, timeout: number = BaseHelper.DEFAULT_TIMEOUT) {
        return browser.wait(this.EC.visibilityOf(locator), timeout);
    }

    public static async clickElement(locator: ElementFinder) {
        await this.waitForElementToBeClickable(locator);
        return locator.click();
    }

    private static readonly EC = protractor.ExpectedConditions;
}
