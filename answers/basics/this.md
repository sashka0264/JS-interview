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