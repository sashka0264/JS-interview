```js
typeof Object === "function";
typeof Function === "function";

Object.__proto__ === Object.prototype; // false
Object.__proto__ === Function.prototype; // true
Function.__proto__ === Function.prototype; // true

const o = {};
o.__proto__ = {};
o.__proto__.hasOwnProperty = null;

const p = {};
p.hasOwnProperty();

function f() {}
f.__proto__ === Function.prototype;
f.hasOwnProperty();
f.__proto__.__proto__.hasOwnProperty();
```