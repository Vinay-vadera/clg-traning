//loops,strict mode,console type,array methods

//while,do while,for

// let count=10;

// while(count<=10){
//     console.log(count);
//     count++;
// }

// do{
//     console.log(count);
//     count++;
// }

// let arr=[10,20,30,40,50,60];

// for(let element of arr){
//     console.log(element)
// }

// for(let index in arr){
//     console.log(index);
// }

// let items=["first","second",3,4,"fifth"];

// for(let item of items){
//     console.log(item);
// }

// let a=20;
// b=30;
// console.log(b);

// function sum(a,b){
//     //usee strict
//     console.log("sum function")
// }

// sum();

// let person={
//     name :vinay
//     age:"**"

// }

// console.table(data)

// console.group("group1");
// console.log("message 1");
// console.log("message 2");
// console.count("counter")
// console.count("counter")
// console.count("counter")

//array methods

// let arr=[10,20,30,40,50,60];

//push,pop,shift,unshift

// let result = arr.push(1000);
// console.log(result);
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

//shift unshift

// let arr=[10,20,30,40,50,60];

// arr.unshift(1000);

// console.log(arr);

// arr.shift();

// console.log(arr);

// concat

// let arr1=[10,20];
// let arr2=[30,40];

// let result=arr1.concat(arr2);
// console.log(result);
// console.log(arr1);
// console.log(arr2);

// slice and splice

// let arr=[10,20,30,40,50,60];

// let slicedArr=arr.slice(2,5);

// console.log(slicedArr);
// console.log(arr);

// let result=arr.splice(1,2,"vinay","vadera");
// console.log(result);
// console.log(arr);

// include,reverse,join,first

// let result=arr.includes(40);

// arr.reverse();
// console.log(arr);

// let joinedstr = arr.join("%");
// console.log(joinedstr);

// let arr=[10,20,30,40,50,60];

// let result=arr.flat(2);

// console.log(result);

// map,filter,reduce,foreach

// let arr=[10,20.,30,40,50,60];

// callback functions
//Higher order functions

let newarr=arr.map((item)=>{
    if(item > 30){
        return item *10;
    }
    // return item *10;
})

console.log(newarr);
console.log(arr);

// map return new array with the same length as original