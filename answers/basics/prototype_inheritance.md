* Каждый обьект в JS имеет скрытую ссылку на null или на другой обьект, который будет его прототипом.
* Для доступа к прототипу мы можем использовать ссылку __proto__.
* Если мы хотим вызвать метод obj, то поиск будет сначала в obj, а потом в его прототипах.
* Prototype - это обьект, имеющий единственное свойство constructor, ссылающийся на саму функцию. Есть только у функций (не стрелочных). У prototype свойство конструктор - не единственное, если есть методы в классе вне конструктора, они тоже будут.
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
