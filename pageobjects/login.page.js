import Page from './page'

class LoginPage extends Page {
    get username() { return $("//input[@id='login-form-username']") }

    get password() { return $("//input[@id='login-form-password']") }

}

export default new LoginPage()