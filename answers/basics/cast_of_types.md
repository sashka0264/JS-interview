### Преобразования обьектов в любой примитив (!)
Сначала вызывается метод valueOf, который должен вернуть примитив (по умолчанию возвращает обьект). Что именно обьект при преобразовании должен нам вернуть прописываем в этом методе. Если valueOf вернет обьект, то отработает метод toString (или Number(), смотря что во что делается преобразование) и обьект становится строкой. Пример:
```js
var room = {
  number: 777,
  valueOf: function() { return this.number; },
};
```
Так, кстати, обрабатывается разница между обьектами Дат.
### Сравнениие значений разных типов
При сравнении значений разных типов JavaScript приводит каждое из них к числу.
### Операторы '/', '-', '*'
Приводят все значения к числу. Значения null, false, "" (если есть пробелы слева/справа, то они обрезаются) и [] преобразуются в 0. Унарный минус меняет знак на противоположный.
### Оператор '+'
Если один из аргументов строка, то все значения приводятся к строкам, иначе - к числам. Значения null, false, "" (если есть пробелы слева/справа, то они обрезаются) и [] преобразуются в 0. Унарный плюс преобразует значение к числу.
### В булевый тип
Значения null, undefined, 0 и пустая строка без пробелов преобразуются в false). Любая непустая строка или обьект - это true. При сравнении обьектов, они НИКОГДА не равны друг другу даже с нестрогим равенством.

#### Присваивание
```js
let a, b, c;
a = b = c = 2 + 2;
```
Присваивание работает справа-налево. Сначала вычисляется самое правое выражение 2 + 2, и затем оно присваивается переменным слева: c, потом b, потом a. В конце у всех переменных будет одно значение.

### ||
Другими словами, цепочка ИЛИ "||" возвращает первое истинное значение или последнее, если такое значение не найдено.
### &&
Вычисляет операнды слева направо. Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда. Если все операнды были истинными, возвращается последний.