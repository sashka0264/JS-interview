#### Можно ли мутировать примитивы?
Нет. Примитивы в JS иммутабельны, а обьекты и массивы - мутабельны.

#### Что такое автобоксинг?
Автобоксинг - это механизм, который не позволяет работать с примитивами как с обьектами, но при этом, сохраняет возможность получать методы и свойства (как будто это обьект). Например, для строки создается временная обертка String, у которой есть нужные нам методы, а на выходе - вернется примитив.

#### Что будет в консоли?
```js
(function(){	
    var a = b = 3;
})();
console.log(b) // 3, не нашел, создалось глобально
console.log(a) // ошибка
```
```js
function Car (name) {
  this.name = name;
  return 'bmw'; // т.к. некорректный тип, то он игнорируется
}

var ford = new Car('ford'); 
console.log(ford.name); // ford
```
```js
var a = {
	name: 'a',
  sayHello: function () {
  	console.log(this.name);
  }
}

var b = {
	name: 'b',
}

var bSayHello = a.sayHello.bind(b); // ЭТО НАВСЕГДА

var c = {
	name: 'c',
}

bSayHello.call(c); // b, так как bind нельзя переназначить уже ничем, это делается ЕДИНОЖДЫ И НАВСЕГДА
```
```js
Infinity // бесконечность, например 5/0 = Infinity 
```
```js
Объекты localStorage и sessionStorage предоставляют одинаковые методы и свойства:

setItem(key, value) // сохранить пару ключ/значение.
getItem(key) // получить данные по ключу key.
removeItem(key) // удалить данные с ключом key.
clear() // удалить всё.
key(index) // получить ключ на заданной позиции.
length // количество элементов в хранилище.

Куки при каждом запросе отправляются на сервер
```

#### Функция-генератор 
Генератор - это функция, которая может выполняться частично и возвращать промеждуточные значения.
```js
function *gen() {
  // do something...
  yield 1;
  // do something...
  yield 2;
};

const iterator = gen();

iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.next(); // {value: undefined, done: true}
```

#### Приватность
Префикс _ - защищенное свойство обьекта. Менять напрямую является плохим тоном, делается это с целью получить контролируемый доступ к свойству.
```js
this.name = 'Alex';

this.name = 'Nadia';
console.log(this.name); // Nadia.

this._name = 'Alex';
get name() {
  return this._name;
}

this.name = 'Nadia';
console.log(this.name); // Alex.
```
Префикс # - приватное свойство обьекта. Благодаря ему мы не можем получить доступ к ```object.#name``` извне или из наследуемых классов.
```js
class Name {
  this.#name = 'Alex';
  get name() {
    return this.#name;
  }
}
const object = new Name();
console.log(object.#name); // Error.
console.log(object.name); // 'Alex'.
```
