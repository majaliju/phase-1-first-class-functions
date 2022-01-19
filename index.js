// receivesAFunction

function receivesAFunction(callbackFunction){
    const any = true;
    callbackFunction(any);
    return any;
}

function returnsANamedFunction(){
    const returnedOne = function(x){
        return true;
    }
    return returnedOne;
}

function returnsAnAnonymousFunction(){
    return function(){
        return true;
    } ;
}