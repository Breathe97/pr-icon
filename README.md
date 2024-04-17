# 基于 vue3 封装的一个图标库。

<!-- [在线预览](https://pryun.vip/exp/pr-icon/) -->

## 使用方法

```bash
npm i pr-icon
```

#### 全局引入

```js
import PrIcon from 'pr-icon'
app.use(PrIcon)
```

#### 按需引入

```js
import { PrIcon } from 'pr-icon'
```

```html
<div id="app">
  <pr-icon></pr-icon>
</div>
```

#### 参数设置

```js
const props = defineProps({
  // 图标名称
  name: {
    type: [String],
    default: () => 'pryun'
  },
  // 图标颜色
  color: {
    type: [String],
    default: () => ''
  },
  // 图标大小
  size: {
    type: [String, Number],
    default: () => 28
  }
})
```

## 代码仓库

[github](https://github.com/breathe97/pr-icon)

## 贡献

breathe
