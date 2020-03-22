# 初始服务器渲染

利用 express 返回 HTML

## react 服务器端渲染实现

* react-dom/server 包里面有两个方法 `renderToString` 和 `renderToStaticMarkup`.
* `renderToString` 和 `renderToStaticMarkup` 的主要作用都是将 React Component 转化为 HTML 的字符串.

1. renderToString: 将 React Component 转化为 HTML 字符串，生产的 HTML 的 DOM 会带有额外属性，各个 DOM 会有 data-react-id 属性，第一个 DOM 会有 data-checksum 属性.(react@15)

data-checksum 判断组件传入的数据状态是否发生改变，如果改变，组件会重新渲染.

2. renderToStaticMarkup: 同样是将 React Component 转化为 HTML 字符串，但是生产 HTML 的 DOM 不会有额外属性，从而节省 HTML 字符串的大小.

react@16 去掉了 data-react-id 和 data-checksum 两个属性. 改为在根节点中的 data-reactroot 属性.

在 react@15 中，当重新渲染节点时，ReactDOM.render() 方法执行与服务器生产的字符挨个比对.如果有不匹配，React 在开发模式下会发出警告，替换整个服务端的节点树.

在 react@16 中，客户端渲染使用差异算法检查服务端生成的节点的准确性. 相比于 react@15 更宽松；例如，不要求服务端生成的节点属性与客户端顺序完全一致. 当 react@16 客户端渲染器监测到节点不匹配时，仅仅是尝试修改不匹配的 HTML 子树，而不是修改整个 HTML 树.