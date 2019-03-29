import {browser, by, element} from "protractor";
import { BasePage } from "../base.page";
import { WebDriverHubConstants } from "./webdriverhub.constants";

export class WebDriverHubHomePage extends BasePage {

    public static get() {
        browser.waitForAngularEnabled(false);
        this.navigateTo(WebDriverHubConstants.pageUrl);
    }

    static get serverInfo() {
        return element(by.css(".server-info"));
    }

    static get createSessionButton() {
        return element(by.buttonText(WebDriverHubConstants.buttonLabels.createSession));
    }

    static get refreshSessionButton() {
        return element(by.buttonText(WebDriverHubConstants.buttonLabels.refreshSession));
    }

    static get createSessionDialog() {
        return element(by.css(".modal-dialog"));
    }

    static get deleteSessionButton() {
        return element(by.buttonText(WebDriverHubConstants.buttonLabels.deleteSession));
    }

    static get createSessionCancel() {
        return element(by.buttonText(WebDriverHubConstants.buttonLabels.cancel));
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
        return element(by.name(WebDriverHubConstants.buttonLabels.ok));
    }

    static get cancelButton() {
        return element(by.name(WebDriverHubConstants.buttonLabels.cancel));
    }
}
