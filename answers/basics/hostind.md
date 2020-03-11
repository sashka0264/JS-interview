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