import {browser} from 'protractor';

/**
 * Class representing generic page.
 * Methods/properties for global elements should go here.
 *
 * @export
 * @class BasePage
 */
export class BasePage {

  /**
   * Navigates browser to a page using baseUrl from params passed in.
   * Should use relative URL (eg '/home.jsp').
   *
   * @param {string} relativeUrl Path of URL after the host (eg '/home.jsp').
   * @memberof BasePage
   */
  public static navigateTo(relativeUrl: string) {
      browser.driver.get(browser.baseUrl + relativeUrl);
  }

  static get pageTitle() {
        return browser.driver.getTitle();
  }

  constructor(public isNewNotificationFeatureClosed: boolean = false) {}

}
