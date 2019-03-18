import {browser, by, element} from "protractor";
import { BasePage } from "../base.page";

export class WebDriverHubHomePage extends BasePage {

    public static readonly pageUrl = "/wd/hub/static/resource/hub.html";

    public static get() {
        browser.waitForAngularEnabled(false);
        this.navigateTo(this.pageUrl);
    }

    static get pageTitle() {
        return browser.driver.getTitle();
    }

    static get serverInfo() {
        return element(by.css(".server-info"));
    }

    static get createSessionButton() {
        return element(by.buttonText("Create Session"));
    }

    static get refreshSessionButton() {
        return element(by.buttonText("Refresh Sessions"));
    }

    static get createSessionDialog() {
        return element(by.css(".modal-dialog"));
    }

    static get deleteSessionButton() {
        return element(by.buttonText("Delete Session"));
    }

    static get createSessionCancel() {
        return element(by.buttonText("cancel"));
    }

    static get sessionTabBar() {
        return element(by.css(".goog-tab-bar"));
    }

    static get sessionTabSelected() {
        return element(by.css(".goog-tab .goog-tab-selected"));
    }

    static get sessionAllTabs() {
        return element.all(by.css(".goog-tab"));
    }

    static get browserDropDown() {
        return element.all(by.css(".modal-dialog-content select"));
    }

    static get chromeBrowserOption() {
        return element(by.cssContainingText("option", "chrome"));
    }

    static get okButton() {
        return element(by.name("ok"));
    }

    static get cancelButton() {
        return element(by.name("cancel"));
    }
}
