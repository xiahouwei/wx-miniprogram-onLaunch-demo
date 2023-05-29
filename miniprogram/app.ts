// app.ts
// 引入wind-eventbus-miniprogram
import { $fxEventBus } from 'wind-eventbus-miniprogram'
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

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
})