import { expect } from 'chai'
import VegasPage from '../pageobjects/vegas.page'
import LoginPage from '../pageobjects/login.page'

describe('As a visitor to the William Hill Vegas site, I want to be able to search for specific game on Vegas and select to play', function() {

    this.retries(3)

    beforeEach(function() {
        browser.setViewportSize({
            width:1366, 
            height:768
        })

        VegasPage.open()
    })

    it('Ensure test can run on Desktop', function() {

        VegasPage.search("Mayfair Roulette")

        VegasPage.mayfairRoulette.waitForVisible()
        VegasPage.mayfairRoulette.moveToObject()

        VegasPage.more()

        VegasPage.play()
        
        LoginPage.username.waitForVisible()

        expect(LoginPage.username.isVisible()).to.equal(true)
    })

    it('Ensure test can run on mobile emulator', function() {

        browser.setViewportSize({
            width:320, 
            height:720
        })

        VegasPage.search("Mayfair Roulette")

        VegasPage.mayfairRoulette.waitForVisible()
        VegasPage.mayfairRoulette.click()

        VegasPage.play()

        LoginPage.username.waitForVisible()
        
        expect(LoginPage.username.isVisible()).to.equal(true)

    })

})
