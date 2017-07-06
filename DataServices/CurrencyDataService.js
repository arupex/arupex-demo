/**
 * Created by daniel.irwin on 6/17/17.
 */
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