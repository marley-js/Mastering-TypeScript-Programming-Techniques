"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Website Test using TypeScript', function () {
    beforeEach(function () {
        protractor_1.browser.driver.get('http://localhost:8080');
    });
    it('should have a title', function () {
        expect(protractor_1.browser.driver.getTitle()).toEqual('Fullstack Developer Academy');
    });
    it('should have an input box for name', function () {
        protractor_1.browser.driver.findElement(protractor_1.by.id('name')).sendKeys('John');
        protractor_1.browser.driver.findElement(protractor_1.by.id('greet')).click();
        expect(protractor_1.browser.driver.findElement(protractor_1.by.id('welcome')).getText()).toEqual('Welcome, John!');
    });
    it('should have credits as a link', function () {
        expect(protractor_1.browser.driver.findElement(protractor_1.by.className('credit')).getAttribute('href')).toEqual('https://fullstack-developer.academy/');
    });
});
