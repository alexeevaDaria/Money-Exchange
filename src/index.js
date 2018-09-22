// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency>10000){return {error: "You are rich, my friend! We don't have so much coins for exchange"};}
    if(currency==0){return {};}

    let obj ={};
    let arrC=[50,25,10,5,1];
    var i=0;
    for(let temp of ['H','Q','D','N','P']){
        let x = Math.floor(currency/arrC[i]);
        currency=currency%arrC[i];
        i++;
        if(x>0) obj[temp]=x;
    }
    return obj;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
