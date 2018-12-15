var Base = require('../Utilities/Base.js');
var InnerFreeThrowsMade = require('../Pages/InnerFreeThrowsMade.page.js');
var OuterFreeThrowsMade = require('../Pages/OuterFreeThrowsMade.page.js');


describe('Inspect Free Throws Made',()=>{

        beforeEach(function(){
        Base.navigateToHome();
        });

        it('should verify DropDown functionality',()=>{

            expect(OuterFreeThrowsMade.dropdownButton.isDisplayed()).toBe(true);
        });


        it('should verify DropDown functionality table',()=>{

            OuterFreeThrowsMade.dropdownButton.click();
            OuterFreeThrowsMade.dropdownList.getText().then(function(text){
                console.log(text);
        });
        });

        it('should verify DropDown functionality under the team',()=>{

            OuterFreeThrowsMade.dropdownButton.click();
            OuterFreeThrowsMade.teamsButton.click(); 
            OuterFreeThrowsMade.elementsUnderTeam.getText().then(function(text1){
                console.log(text1);
        });
        });


        it('should verify DropDown functionality under the player',()=>{

            OuterFreeThrowsMade.dropdownButton.click();
            OuterFreeThrowsMade.playerButton.click();
            OuterFreeThrowsMade.elementsUnderPlayer.getText().then(function(playersList){
                console.log(playersList);
        });
        });

        
        it('should verify the header name',()=>{

            expect(OuterFreeThrowsMade.headerOfTable.isDisplayed()).toBe(true);   
        });

        it('verify the names under the header',()=>{

        OuterFreeThrowsMade.namesUnderTable.getText().then(function(names){
            //console.log(names);
        var trimmed1 = names.split(" ");
        var trimmed2 = trimmed1.slice(3);
        for(var i=0; i<trimmed2.length; i+=4){
            console.log(trimmed2[i]+trimmed2[i+1]);
        }
        });
        });


        it('should verify Glossary link',()=>{

            OuterFreeThrowsMade.headerOfTable.click();
            expect(InnerFreeThrowsMade.glossary.isDisplayed()).toBe(true);
        });

        it('Verify the age',()=>{

            OuterFreeThrowsMade.headerOfTable.click();
            InnerFreeThrowsMade.optionDropdown.click();
            InnerFreeThrowsMade.dropdownAll.click();
            InnerFreeThrowsMade.age.getText().then(function(age){
                for(var i=0; i<age.length; i++){
                    if(age[i]>30){
                        console.log(age[i]);
        }
        }
        });
        });

        it('should print out FTM that are less than 3',()=>{

            OuterFreeThrowsMade.headerOfTable.click();
            InnerFreeThrowsMade.optionDropdown.click();
            InnerFreeThrowsMade.dropdownAll.click();
            InnerFreeThrowsMade.FTMdata.getText().then(function(freeThrows){
                for(var i=0; i<freeThrows.length; i++){
                    if(freeThrows[i]<3){
                        console.log(freeThrows[i]);
        }
        }
        });
        });
 
        it('should print the whole row',()=>{

            OuterFreeThrowsMade.headerOfTable.click();
            InnerFreeThrowsMade.optionDropdown.click();
            InnerFreeThrowsMade.dropdownAll.click();
               var arr = InnerFreeThrowsMade.wholeRow
               arr.each(function(row){
               row.getText().then(function(allText){
                     console.log(allText);
            });
            });  
            });

        
        it('should print 10th row',()=>{

            OuterFreeThrowsMade.headerOfTable.click();
            InnerFreeThrowsMade.optionDropdown.click();
            InnerFreeThrowsMade.dropdownAll.click();
            InnerFreeThrowsMade.tenthRow.getText().then(function(row10){
                console.log(row10);
        });
        });

        it('should print the header of the table',()=>{

            OuterFreeThrowsMade.headerOfTable.click();
            InnerFreeThrowsMade.headerOfTable.getText().then(function(header){
                   console.log(header);
        });
        });

        it('should calculate total points of players',()=>{
            
            OuterFreeThrowsMade.headerOfTable.click();
            InnerFreeThrowsMade.optionDropdown.click();
            InnerFreeThrowsMade.dropdownAll.click();
            InnerFreeThrowsMade.totalPoints.count().then(function(text){
                   console.log(text);
        });
        });
        });
        


