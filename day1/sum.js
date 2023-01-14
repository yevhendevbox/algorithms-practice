"use strict";
function sum(...arg) {
    return arg.reduce((sum, num) => sum + num);
}
console.log(sum(1, 3, 5, 10));
