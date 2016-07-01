var myStepDefinitionsWrapper = function () {

    this.Given(/^I go to home page$/, function (next) {
        browser.get("https://www.baidu.com/");
        next();
    });
};
module.exports = myStepDefinitionsWrapper;