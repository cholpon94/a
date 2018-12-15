
require("../Utilities/Base.js");
require('../Pages/OuterFreeThrowsMade.page.js');


   var InnerFreeThrowsMade = function(){

    this.glossary = element(by.css('.stats-glossary-toggle__link'));
    this.age = element.all(by.xpath('/html/body/main/div[2]/div/div[2]/div/div/nba-stat-table/div[2]/div[1]/table/tbody/tr/td[4]'));
    this.optionDropdown = element(by.css("div:nth-child(1) > div > div > select"));
    this.dropdownAll = element.all(by.css("option[label='All']"));
    this.FTMdata = element.all(by.xpath('/html/body/main/div[2]/div/div[2]/div/div/nba-stat-table/div[2]/div[1]/table/tbody/tr/td[16]'))
    this.wholeRow =  element.all(by.repeater('(i, row) in page track by ::row.$hash'));
    this.tenthRow = element.all(by.repeater('(i, row) in page track by ::row.$hash')).get(10)
    this.headerOfTable = element.all(by.css('.nba-stat-table__overflow>table>thead'))
    this.totalPoints = element.all(by.xpath('/html/body/main/div[2]/div/div[2]/div/div/nba-stat-table/div[2]/div[1]/table/tbody/tr/td[9]'))

    
   };

   module.exports=new InnerFreeThrowsMade();