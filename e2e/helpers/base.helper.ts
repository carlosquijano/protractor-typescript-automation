import { browser, ElementFinder, protractor} from "protractor";

export class BaseHelper {

    public static async isElementClickable(locator: ElementFinder) {
        return this.EC.elementToBeClickable(locator);
    }

    public static async waitForElementToBeClickable(locator: ElementFinder, timeout: number = 5000) {
        return browser.wait(this.isElementClickable(locator), timeout);
    }

    public static async waitForElementToBeVisible(locator: ElementFinder, timeout: number = 5000) {
        return browser.wait(this.EC.visibilityOf(locator), timeout);
    }

    public static async clickElement(locator: ElementFinder) {
        return this.waitForElementToBeClickable(locator).then(() => {
            return locator.click();
        });
    }

    private static readonly EC = protractor.ExpectedConditions;
}
