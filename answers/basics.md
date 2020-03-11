[Различия ООП и ФП](./basics/oop_or_fp.md)

[Область видимости](./basics/viewable_area.md)

[Замыкания](./basics/circuit.md)

[Императивное/деклоративное программирование](./basics/imperative_declarative_programming.md)

[Прототипное наследование](./basics/prototype_inheritance.md)

[Стрелочные функции и обычные](./basics/arrow_functions_and_ordinary.md)

[Отличие let от const](./basics/let_and_const.md)

[Критический путь рендеринга](./basics/critical_rendering_path.md)

[Promise](./basics/promise.md)


### Унарные и бинарные операторы

### Приведение типов
* '===' - сравнение без приведения типов.
* '==' - сравнение с приведением типов.
* При сравнении, если одна из переменных не строка, то оба значения приводятся к числу, иначе сравнение будет в алфавитном порядке.

### Всплытие переменных 
```js
var a = 2;
foo(); // foo 'всплывает'
function foo() {
	a = 3;
	console.log(a);	// 3, потому что обьявление a всплывает внутри foo
	var a;
}
console.log(a);	// 2
```
### Контекст вызова
This - это обьект, зависящий от контекста в котором он применяется. Он может динамически изменяться. Назначается в момент вызова.
```js
function foo() {
	console.log(this.bar);
}

var bar = "global";

var obj1 = {
  	bar: "obj1",
  	foo: foo
};

var obj2 = {
	bar: "obj2"
};

foo(); // "global"
obj1.foo();	// "obj1"
foo.call( obj2 ); // "obj2"
new foo(); // undefined, потому что new foo() устанавливает this на абсолютно новый пустой объект и возвращает
// его, а ключа bar в нем не существует
```