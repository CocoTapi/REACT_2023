//primitives

import { OrganizeImportsMode } from "typescript";

let age: number;
age = 12;

let userName: string;
userName="Dodger";

let isInstructor: boolean;
isInstructor = true;

//more complex types

//array of strings
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

//object types
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',
    age: 32
}

let people: {
    name: string;
    age: number;
}[];

people = [
    {
        name: 'Dodger',
        age: 10
    },
    {
        name: 'Katlena',
        age: 10
    }
]


//use type definition
type Family = {
    name: string;
    age: number;
}

let sato: Family;

sato = {
    name: 'Taro',
    age: 12
}


//type inference

let course = "React guide";
//you should stick the same type. Don't do this: 
//course = 1234

//OR

let course2: string | number = 'Cooking guide';
course2 = 101;


//function & types

//set return type 
function add(a: number, b: number): number {
    return a + b;
}

//": void" is the function which never return anything
function print(value: any) {
    console.log(value);
}

//generics

//instead put "any", add"T" to tell the type of this array and of this value should be the same types of values
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

//this will be an error if you use "T" instead of "any": 
//updatedArray[0].split(''); 

