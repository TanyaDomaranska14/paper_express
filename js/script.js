console.log("just test");
let a = 10;
let b = 4;
console.log(a+b);
console.log(typeof 3);
console.log(typeof "3");
console.log(typeof "abc");
console.log(typeof true);

console.log(Number.parseInt("7jvhvf7vmj"));
console.log(Number.parseInt("j7"));

console.log(0.1+0.2);//0.30000000004
console.log((0.1*10+0.2*10)/10);//0.3

console.log(Math.max(10,15,2,45,89,5,789));

let str = "hello";
let str2 = 'hello';
let phrase = `так можна вставляти ${str}`;
let name = "Tanya";
let hello = `Hello ${name}`;
console.log(hello);
console.log(typeof false);

let user = {
   name: "Tanya",
   age: 30,
   "Like cars": true,
};
for(let key in user){
   console.log(user[key]);
}

