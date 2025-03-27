// Question 1;
let arr1 = [3,7,34,90,12];
let arr2 = [true, "gren", "where",12,56];
let num1 = arr1.at(-1);
let arr = arr2.at(-1);
console.log({num1});
console.log({arr});


//Question 2; 
const myPets = ["cow", "Bird", "Snake", "Dog"];
const string1 = myPets.join(",");
console.log({string1});

//Question 3;
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
var sortedarr = arr3.sort((x,y) => x-y);
console.log({sortedarr});

//Question 4;
let arry = ["boy", "man", "girl", "school", "girl", "woman"];
let arry1 = [...new Set(arry)];
let arry2 = arry.filter((item,index) => arry.indexOf(item) !== index);
console.log({arry1});
console.log({arry2});

//Question 5;
let arr5 = ["the", "way", "x", 4];
let string2 = "food";
if(arr5.includes(string2)) {
    console.log({string2});
} else {
    console.log("The search word was not found");
}

//  Question 6;
let word = "renniw";
let word2 = word.split("").sort().join("");
console.log({word2});

//Question 7;

const fruits = ["Watermelon", "Banana", "Oranges", "pineapple", "Pawpaw", "Plums", "Strawberry", "Pears", "Grapes", "Dates"];
fruits.splice(5,0, "Tomato");
console.log(fruits);