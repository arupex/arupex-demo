### DataServices - are mockable services which call out to other external components

##### Example 1:
    module.exports = [
        { getLatestBase : 'GET latest?base={{base}}' },//you can force the output function name
        'latest?symbols={{symbols}}'//you can let clientBuilder determine the name of the function
    ];
    
    //allows you to determine values for variables via other injectable services
    module.exports.injector = function(context, UserService){
    
        return {
            baseUrl : 'http://api.fixer.io/',
            base: UserService.getCurrency(),
            symbols : UserService.getOtherCurrency()
        };
    
    };
##### Example 2:
    module.exports = {
        getCurrency : function (){
            return 'USD';
        },
        getOtherCurrency : function(){
            return 'JPY';
        }
    };
    
    //cannot be mocked
    module.exports.overrideable = false;


### DataServiceUtils - an extension to DataServices
These are modules which can have data services injected into them but can also be injected to Services as a middleman
 if your data services dont give you the cleanest data and want to abstract it from your internal Services!