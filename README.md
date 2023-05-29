# wx-miniprogram-onLaunch-demo

一个微信小程序demo, 通过wind-eventbus-miniprogram插件用最简单的方法解决onLaunch与onLoad异步任务问题

#### app.ts
```typescript
// app.ts
// 引入wind-eventbus-miniprogram
import { $fxEventBus } from 'wind-eventbus-miniprogram'
onLaunch() {
	// 登录
	wx.login({
		success: res => {
			console.log(res.code)
			// 发送 res.code 到后台换取 openId, sessionKey, unionId
			// 当登录成功后, 发布onReady时间, 然后每个页面订阅onReady
			setTimeout(() => {
				$fxEventBus.emit('onReady', res.code)
			}, 1000)
		},
	})
},
```

#### index.ts
```typescript
// index.ts
// 引入wind-eventbus-miniprogram
import { $fxEventBus } from 'wind-eventbus-miniprogram'
onLoad() {
    // 订阅onReady, .app.js中的onLaunch获取登录信息后会发布onReady
	$fxEventBus.on('onReady', this, (code:string) => {
		console.log(code)
		this.setData({
			userCode: code
		})
		// @ts-ignore
		if (wx.getUserProfile) {
			this.setData({
				canIUseGetUserProfile: true
			})
		}
	})
},
```