"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var calculatorpage_1 = require("../pages/calculatorpage");
var calculator = new calculatorpage_1.calculatorpage();
describe('calculator Test', function () {
    beforeEach(function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    });
    it('subtraction Test', function () {
        expect(calculator.getTitle()).toContain("Super Calculator");
        calculator.setFirstNumber();
        calculator.setFirstNumber();
        calculator.clickGoBtn();
        expect(calculator.getresult()).toContain("6");
    });
});
