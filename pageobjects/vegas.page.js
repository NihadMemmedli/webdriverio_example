import Page from './page'

class VegasPage extends Page {
    /**
     * define elements
     */
    get searchIcon () { return $("//button[contains(@data-test,'game-search-button')]") }

    get searchInput () { return $("//input[@data-test='game-search-field']") }

    get mayfairRoulette () { return $("//img[@alt='Mayfair Roulette']") }

    get moreTail () { return $("//button[@data-test='tile-menu-button-more']") }

    get playNow() { return $("//button[@data-test='tile-details-button-play']") }

    /**
     * define or overwrite page methods
     */

    search(data) {
        this.searchIcon.click()
        this.searchInput.addValue(data)
        return this
    }
    
    open () {
        super.open('/')
        this.searchIcon.waitForVisible()
        return this
    }

    more() {
        this.moreTail.waitForVisible()
        this.moreTail.click()
        return this
    }

    play(){
        this.playNow.waitForVisible()
        this.playNow.scroll(0, 300)
        this.playNow.click()
    }

}

export default new VegasPage()