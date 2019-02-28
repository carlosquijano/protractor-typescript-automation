import {browser, element, by} from 'protractor';
import { BasePage } from '../base.page';

export class WebDriverHubHomePage extends BasePage {

    private readonly pageUrl = '/wd/hub/static/resource/hub.html';

    /**
     * Gets the page from the `browser` object.
     */
    get() {
        browser.waitForAngularEnabled(false);
        this.navigateTo(this.pageUrl);
    }

    /**
     * Gets the page title from the `browser` object.
     */
    getPageTitle() {
        return browser.driver.getTitle();
    }

    /**
     * Gets the server info banner element.
     */
    getServerInfo() {
        return element(by.css('.server-info'));
    }
}