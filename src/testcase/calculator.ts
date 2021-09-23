import { browser, Browser } from "protractor";
import { calculatorpage } from "../pages/calculatorpage";

let calculator = new calculatorpage();
describe('calculator Test', function () {
    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/')

    })


    it ('subtraction Test',function()
    {
expect(calculator.getTitle()).toContain("Super Calculator")
calculator.setFirstNumber()
calculator.setFirstNumber()
calculator.clickGoBtn()
expect(calculator.getresult()).toContain("6")
    })  
}
)