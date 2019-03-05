import { browser, ElementFinder, protractor} from 'protractor';

export class BaseHelper {
    
    private static readonly EC = protractor.ExpectedConditions;

    static async isElementClickable(locator: ElementFinder) {
        return this.EC.elementToBeClickable(locator);
    }

    static async waitForElementToBeClickable(locator: ElementFinder, timeout : number = 5000) {
        return browser.wait(this.isElementClickable(locator), timeout);
    }

    static async waitForElementToBeVisible(locator: ElementFinder, timeout : number = 5000) {
        return browser.wait(this.EC.visibilityOf(locator), timeout);
    }

    static async clickElement(locator: ElementFinder) {
        return this.waitForElementToBeClickable(locator).then(() => {
            return locator.click();
        });
    }

}