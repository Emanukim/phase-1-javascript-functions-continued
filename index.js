function saturdayFun(fun = 'roller-skate'){
    return `This Saturday, I want to ${fun}!`;
}


function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(emphatic){
    if (emphatic==='*'){
    return function (){
        return "You are *a hard worker*!"
    }}
     else if(emphatic==="||"){
        return function(){
            return "You are ||a dedicated programmer||!"
        }
     }
}