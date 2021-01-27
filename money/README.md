# v-money

## 用法
 
```js
<input v-model="price" v-money="money" />

export default {
  data () {
    return {
      price: 124.07,
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '￥ ',
        suffix: ' #',
        precision: 2,
        masked: false
      }
    }
  },
}
```
