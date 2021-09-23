import { browser, by, element } from "protractor" ;
import { config } from "../../conf/config";
export class calculatorpage{
    title=element(by.xpath("//div//h3"))
    firstNumber =element(by.css("[ng-model='first']"))
    operator=element(by.xpath("//select[@class='span1 ng-valid ng-touched ng-dirty ng-valid-parse']"))
    secondNumber=element(by.css("[ng-model='second']"))
    button=element(by.css("[ng-click='doAddition()']"))
    result=element(by.xpath("//h2[@class='ng-binding']"))

    getTitle(){
        browser.sleep(5000)
        return this.title.getText()
    }
    setFirstNumber(){
        this.firstNumber.sendKeys('1')
    }
      setSecondNumber(){
          this.secondNumber.sendKeys('5')
      }
      async clickGoBtn(){
          await this.button.click()

      }
      async getresult(){
          return this.result.getText()
      } 
          
    }
      
      

  

