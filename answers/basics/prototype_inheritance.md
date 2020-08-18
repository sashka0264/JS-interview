* Каждый обьект в JS имеет скрытую ссылку на null или на другой обьект, который будет его прототипом.
* Для доступа к прототипу мы можем использовать ссылку __proto__.
* Если мы хотим вызвать метод obj, то поиск будет сначала в obj, а потом в его прототипах.

## Про обьект prototype
Обьект prototype есть только у нестрелочных функций. В нем все методы данной функции (в том числе constructor).
Обычно __proto__ ссылается на prototype той функции, с помощью которой был создан данный обьект
```js
function Example (name) {
  this.name = name;
}

Example.prototype.method = function() {}
```

```js
class Example {
  constructor(name) {
    this.name = name;
  }

  example() {}
}
```

```js
typeof Object === "function";
typeof Function === "function";

String.__proto__ === Function.prototype; // true
Number.__proto__ === Function.prototype; // true
BigInt.__proto__ === Function.prototype; // true
Boolean.__proto__ === Function.prototype; // true
Symbol.__proto__ === Function.prototype; // true
Object.__proto__ === Function.prototype; // true
Function.__proto__ === Function.prototype; // true

Object.__proto__ === Object.prototype; // false


* Цикл for..in пробегается также по унаследованным свойствам. Решается эта проблема так:
```js
var buz = {
  fog: 'stack'
};
for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    alert('это точно туман (' + name + '). Значение: ' + buz[name]);
  }
  else {
    alert(name); // toString или что-то ещё
  }
}
```

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
