Промис - обьект, имеющий значение и 3 состояния: ожидание, успешное и неудачное выполнение. Все методы промиса возвращают промис. Если внутри then - некорректное выражение (вроде самовызывающейся функции), то этот then "пропускается", будто его нет.
```js
Promise.resolve(5)
  .then(res => {
      console.log(res); // 5
    })
  .then(res => {
      console.log(res); // undefined
      return 2;
    })
  .then(res => {
    console.log(res);
    return 4; // 2
  });
```

```js
Promise.resolve(55)
  .then(function (val) {
    console.log(val);
    throw new Error();
  })
  .then((val) => console.log('then', val))
  .catch((val) => {
    console.log('catch', val);
    return Promise().reject();
  })
  .then(finalHandler, finalHandler1)
  .then(finalHandler, finalHandler1)
  .then(finalHandler, finalHandler1);

function finalHandler() {
  console.log('finalHandler')
}
function finalHandler1() {
  console.log('finalHandler1')
}
```