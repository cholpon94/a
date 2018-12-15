var Base = function(){
    this.homeUrl= 'https://stats.nba.com/';
    
    this.navigateToHome = function(){
        browser.get(this.homeUrl);
    };

   



}
module.exports=new Base();