var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var myStepDefinitionsWrapper = function () {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.binding('latest'));

    this.Given(/^I go to home page$/, function (next) {
        console.log("Given");
        browser.get('/protractor-demo/');
        next();
    });

    this.When(/^I input "([^"]*)" and "([^"]*)" into boxes$/, function (num1, num2, next) {
        firstNumber.sendKeys(num1);
        secondNumber.sendKeys(num2);
        next();
    });

    this.When(/^I click Go button$/, function (next) {
        goButton.click();
        next();
    });

    this.Then(/^I get result as "([^"]*)"$/, function (expect_result, next) {
        result.getText().then(function (value) {
            console.log(value);
            chai.expect(value).to.equal(expect_result);
        });
        // chai.expect(result.getText()).to.eventually.equal(expect_result);
        next();

    });
};
module.exports = myStepDefinitionsWrapper;