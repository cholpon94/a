require("../Utilities/Base.js");
require('../Pages/InnerFreeThrowsMade.page.js');

var OuterFreeThrowsMade = function(){

    this.headerOfTable = element.all(by.css('.category-header__name ')).get(7);
    this.namesUnderTable = element(by.xpath('//*[@id="daily_leaders"]/div/div[2]/section[8]'));
    this.dropdownButton = element(by.css('i[class="nav-inner__menu-button-icon [ fa fa-bars fa-lg ]"]'));
    this.dropdownList = element(by.css('.dropdown__base'));
    this.teamsButton = element(by.css('div:nth-child(17)>h4'));
    this.elementsUnderTeam = element.all(by.xpath('/html/body/main/nav/section/section[8]/ul'))
    this.player = element(by.css('.dropdown__item--active > h4'))
    this.playerButton = element.all(by.css('div:nth-child(15)>h4'));
    this.elementsUnderPlayer = element.all(by.css('section > section:nth-child(16) > ul'))


    

};
module.exports=new OuterFreeThrowsMade();