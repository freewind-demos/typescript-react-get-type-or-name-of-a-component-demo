TypeScript React Get Type of Name of a Component Demo
=================================

如何获取一个React Component的`.type`。

- 一个react预定义的组件的`type`可能是string，比如`div`, `p`
- 一个自定义组件的`type`是一个函数，也是定义该组件的函数： 比如定义了一个组件`const Foo = ...`，则 `<Foo`的`type`等于`Foo`这个函数本身

```
npm install
npm run demo
```

It will open page on browser automatically.
