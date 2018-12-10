export default class Page {

    get cookieButton() {return  $("button=Accept & Close") }

    cookieClose() {
        this.cookieButton.waitForVisible()
        this.cookieButton.click()
        return this
    }

    open (path) {
        browser.url(path)
    }
}
