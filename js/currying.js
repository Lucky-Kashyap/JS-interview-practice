// currying

// function f(a,b){
//     console.log(a,b);
// }


// function f(a){
//     return fn(b){
//         console.log(a,b);
//     }
//     fn(b);
// }


// f(10,20);

// let res = f(10)(20);
// console.log(res);


function f(a){
    return function(b){
        console.log(a,b);
    }
}


console.log(f(5)(90));