import {browser, element, by} from 'protractor';

export class WebDriverHubHomePage {

    private readonly pageUrl = 'http://localhost:4444/wd/hub/static/resource/hub.html';

    /**
     * Gets the page from the `browser` object.
     */
    get() {
        browser.waitForAngularEnabled(false);
        browser.driver.get(this.pageUrl);
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