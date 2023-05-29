# wind-eventbus-miniprogram

一个用于微信小程序的eventbus包, 非常的mini

#### 1.安装
```
// 1. 在小程序开发工具

npm install wind-eventbus-miniprogram --save

// 2. 小程序开发工具选择 [工具] -> [构建npm]

```

不错的教程👇🏻👇🏻👇🏻

[微信小程序如何引入npm包？](https://developers.weixin.qq.com/community/develop/article/doc/0008aecec4c9601e750be048d51c13)


#### 2.使用

```javascript
// 引入依赖$fxEventBus为实例, $fxCreateEventBus为构造函数
import { $fxEventBus, $fxCreateEventBus } from 'wind-eventbus-miniprogram'

// 订阅 this为page上下文
$fxEventBus.on('test', this, this.testHandler)

// 发布
$fxEventBus.emit('test', true)

// 取消订阅 只取消当前上下文中的订阅 this为page上下文
$fxEventBus.remove('test', this)


// 或者使用构造函数创建实例
const $myEventBus = $fxCreateEventBus()

```
