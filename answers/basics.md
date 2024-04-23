❗️✅ [Разница между var и let/const](./basics/let_and_const.md)

❗️ [Замыкания и область видимости](./basics/circuit.md)

❗️ [Контекст исполнения](./basics/this.md)

❗️ [Асинхронность](./basics/promise.md)

❗️ [HTTP](./basics/http_methods.md)

❗️ [React/Redux](./basics/react_redux.md)

? [Прототипное наследование](./basics/prototype_inheritance.md)

[Разница между стрелочной и обычной функциями](./basics/arrow_functions_and_ordinary.md)

[Разница между ООП и ФП](./basics/oop_or_fp.md)

[Приведение типов/Присваивание](./basics/cast_of_types.md)

[Критический путь рендеринга](./basics/critical_rendering_path.md)

[Императивное/деклоративное программирование](./basics/imperative_declarative_programming.md)

[Другое о JS](./basics/other_js.md)

### React 
#### useCallback

Мемоизирует функцию, которая будет вызываться при каком-то действии в дальнейшем. Если в компоненте постоянно меняется состояние или пропсы, то такой коллбэк каждый раз будет уникальным. А useCallback позволяет нам закэшировать его и передавать детям, что позволяет нам оптимизировать лишние рендеры, вызванные уникальностью коллбэка.
